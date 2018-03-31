'use strict';

var app = angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/client', {
    templateUrl: 'client/client.html',
    controller: 'ClientController'
  });
}]);

app.controller('ClientController', function($firebaseObject, $firebaseArray,toastr,$scope,$location,user_data,$uibModal,$rootScope) {	 
   var usr;
   firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
        usr = user;
        $scope.names =[
             {'id': 0, 'name': 'Driving Licence'},
             {'id': 1, 'name': 'Adhar Details'}
          ];
          var getaadharData = function(){
              user_data.getloggeduseraadharDetails(usr.uid).then(function(data) {
                     //console.log("data value is",data);
                     if(data == null){
                         $scope.showadhardata = false;
                     }
                     else{
                         $scope.showadhardata = true;
                         $scope.aadharName = data.adharname;
                         $scope.aadharNumber = data.adharnumber;
                         $scope.dob = data.dob;
                         $scope.email = data.email;
                     }
              });
         };
         //for showing logged in user licence data//
         var loggeduserLicenceData = function(){
            var licencedetails =  firebase.database().ref().child('User_licenceData').child(usr.uid).orderByChild('time');
              licencedetails.once('value', function(snapshot){
                if(snapshot.val() == null){
                     $scope.showlicenceData = false;
                }else{
                    $scope.showlicenceData = true;
                    angular.forEach(snapshot.val(),function(value,key){
                       $scope.drivername = value.drivername;
                       $scope.licencenumber = value.licencenumber;
                       $scope.vehicletype = value.vichicletype;
                       $scope.driveremail = value.email;
                    }); 

                }
                   
              });
         };
//based on the selection it will open a form//
        $scope.selectChanged = function(option){
            if(option == "Driving Licence"){
                var modalInstance = $uibModal.open({
                                    animation: $scope.animationsEnabled,
                                    templateUrl: 'myModalContent.html',
                                    controller: 'ModalInstanceCtrl',
                                    size: 'md'
                                  });
            }
            else if(option == "Adhar Details")
            {
               var modalInstance = $uibModal.open({
                                    animation: $scope.animationsEnabled,
                                    templateUrl: 'myModalContent1.html',
                                    controller: 'ModalInstanceCtrl',
                                    size: 'md'
                                  });
            }else{
               cosole.log("nothing is selected");
            }
        }
        //first time showing the user data in the header//
        user_data.getuserData(user.email).then(function(data) {
           $scope.firstname = data.firstname;
           $scope.lastname = data.lastname;
           $scope.user_name = data.firstname;
        });
        getaadharData();
        loggeduserLicenceData();
        //event for updating the view when user enters their adhar detail or licence details
        $scope.$on('getadhardataevent', function (event,data) {
          if(data == "getaadharData"){
                getaadharData();
          }
        });
        $scope.$on('getlicenceevenet',function (event,data) {
             if(data == "getlicencedata"){
                  loggeduserLicenceData();
             }
        })
  } 
    else 
    {
     $location.path('/login');
     console.log("user not logged in");
    }
});
   //logout function called//
	 $scope.logout = function(){
	 	firebase.auth().signOut().then(function() {
	 		       toastr.success('Logout  successfully', 'Success!',{
         	      timeout:5000
             }); 	
             $location.path('/login');
        }).catch(function(error) {
        	var errorMessage = error.message;
		    toastr.error(errorMessage, 'Error', {
                    timeOut: 5000
            });
        });
	 }
});
app.controller('ModalInstanceCtrl',function($scope, $uibModalInstance,$firebaseObject, $firebaseArray,user_data,toastr,$rootScope){
  var vm = this;
	var user = firebase.auth().currentUser;
  $scope.vehicles =[
             {'name': 'Motorcycles with engine capacity of 50 cc or less than 50 cc'},
             {'name': 'Motorcycles with gear,including cars'},
             {'name': 'All Motorcycles types including Motorcycle with gear'},
             {'name': 'Motorcycles with engine capacity of 50 cc or less than 50 cc'},
             {'name': 'Motorcycles of any cc but with no gears - including scooters and mopeds'},
             {'name': 'Light Motor Vehicle for non transport purposes'},
             {'name': 'Light Motor Vehicle intended for commercial purposes'},
             {'name': 'Heavy Passenger Motor Vehicle'},
             {'name': 'Heavy Goods Motor Vehicle'}
          ];
  //console.log("user is",user);
  $scope.savelicenceData = function(){
     vm.dataLoading = true;
      var licence_data = {
                who: user.uid,
                email : user.email,
                licencenumber : $scope.license_number,
                drivername:  $scope.driver_name,
                vichicletype:$scope.selectwheicle,
                time   : firebase.database.ServerValue.TIMESTAMP
            };
            //console.log("licence data is",licence_data);
     user_data.savelicenceDetails(licence_data).then(function(data) {
        if(data=="true"){
                toastr.success('Licence data successfully', 'Success!',{ 
                  timeout:5000 
                });
               vm.dataLoading = false;
               $uibModalInstance.dismiss('cancel');
               $rootScope.$broadcast('getlicenceevenet', 'getlicencedata');
        }else{
            toastr.error('licence not saved', 'Error', {
               timeOut: 5000
            });          
            vm.dataLoading = false;
            $uibModalInstance.dismiss('cancel');
        }
      });       
  }
	//$scope.user_email = user.email;
	$scope.ok = function() {
    $uibModalInstance.close($scope.searchTerm);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
  //for saving aadhar details//
  $scope.saveadharData = function() {
      vm.dataLoading = true;
      var adhar_data = {
                who    : user.uid,
                email : user.email,
                adharnumber : $scope.aadhar_number,
                adharname:  $scope.aadhar_name,
                dob:$scope.myDate,
                time   : firebase.database.ServerValue.TIMESTAMP
            };
      user_data.saveadhardetails(adhar_data).then(function(data) {
        if(data=="true"){
                toastr.success('Adhar saved successfully', 'Success!',{ 
                  timeout:5000 
                });
               vm.dataLoading = false;
               $uibModalInstance.dismiss('cancel');
               $rootScope.$broadcast('getadhardataevent', 'getaadharData');

        }else{
            toastr.error('Adhar not sent', 'Error', {
               timeOut: 5000
            });          
            vm.dataLoading = false;
            $uibModalInstance.dismiss('cancel');
        }
      });      
  };
});