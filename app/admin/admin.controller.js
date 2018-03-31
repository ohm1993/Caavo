'use strict';
var myApp = angular.module('myApp.view4', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin/admin.html',
            controller: 'AdminController'
        });
    }])
    .controller('AdminController', function($firebaseObject, $firebaseArray, toastr, $scope, $location, user_data,$uibModal) {
        var usr;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                usr = user;
                user_data.getuserData(user.email).then(function(data) {
                    $scope.firstname = data.firstname;
                    $scope.user_name = data.firstname;
                });
            } else {
                $location.path('/login');
                console.log("user not logged in");
            }
        });
       
        $scope.logout = function() {
            firebase.auth().signOut().then(function() {
                toastr.success('Logout  successfully', 'Success!', {
                    timeout: 5000
                });
                $location.path('/login');
                // Sign-out successful.
            }).catch(function(error) {
                var errorMessage = error.message;
                toastr.error(errorMessage, 'Error', {
                    timeOut: 5000
                });
                // An error happened.
            });
        }
        var reload = function() {
            user_data.getallusrData().then(function(data) {
                console.log("all data is", data);
                $scope.filteredList = data;
            });
        }
        reload();
        $scope.$on('getlicenceevenet',function (event,data) {
             if(data == "getlicenceadmindata"){
                  reload();
             }
        });
        $scope.$on('getadhardataevent',function (event,data) {
             if(data == "getaadharadminData"){
                  reload();
             }
        })

        $scope.search = function()
        { 
            $scope.filteredList  = _.filter($scope.filteredList,
                     function(item){  
                         return searchUtil(item,$scope.searchText); 
                     });
            
            if($scope.searchText == '')
            {
                $scope.filteredList = $scope.allItems ;
            }
        }  
        //onclick of showadhar card button this function will call//
        $scope.showadharcardbox = function(id){
            $scope.showadhartable = true;
             user_data.getloggeduseraadharDetails(id).then(function(data) {
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
        }
        //display licence box in admin panel//
        $scope.showlicencecardbox = function(id){
            $scope.showlicencetable = true;
            var licencedetails =  firebase.database().ref().child('User_licenceData').child(id).orderByChild('time');
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
        }
        //show admin aadhar details form//
        $scope.showadminaadhardetailForm = function(){
            //console.log("show admin aadhar details forms called");
            var modalInstance = $uibModal.open({
                                    animation: $scope.animationsEnabled,
                                    templateUrl: 'myModalContent1.html',
                                    controller: 'AdminInstanceController',
                                    size: 'md'
                                  });
        }
        $scope.showadminlicencedetailForm = function(){
            var modalInstance = $uibModal.open({
                                    animation: $scope.animationsEnabled,
                                    templateUrl: 'myModalContent.html',
                                    controller: 'AdminInstanceController',
                                    size: 'md'
                                  });
        }
});

myApp.controller('AdminInstanceController',function($scope,$uibModalInstance,$firebaseObject, $firebaseArray,user_data,toastr,$rootScope){
   // console.log("admi instance controller called");
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
   $scope.saveadminlicenceData = function(){
       vm.dataLoading = true;
          var licence_data = {
                    who: user.uid,
                    email : user.email,
                    licencenumber : $scope.license_number,
                    drivername:  $scope.driver_name,
                    vichicletype:$scope.selectwheicle,
                    time   : firebase.database.ServerValue.TIMESTAMP
                };
                console.log("licence data is",licence_data);
         user_data.savelicenceDetails(licence_data).then(function(data) {
            if(data=="true"){
                    toastr.success('Licence data successfully', 'Success!',{ 
                      timeout:5000 
                    });
                   vm.dataLoading = false;
                   $uibModalInstance.dismiss('cancel');
                   $rootScope.$broadcast('getlicenceevenet', 'getlicenceadmindata');
            }else{
                toastr.error('licence not saved', 'Error', {
                   timeOut: 5000
                });          
                vm.dataLoading = false;
                $uibModalInstance.dismiss('cancel');
            }
        });       
   }
   //admin can also save aadhar data //
   $scope.saveadmimnaadharData = function() {
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
               $rootScope.$broadcast('getadhardataevent', 'getaadharadminData');

        }else{
            toastr.error('Adhar not sent', 'Error', {
               timeOut: 5000
            });          
            vm.dataLoading = false;
            $uibModalInstance.dismiss('cancel');
        }
      });      
  };
})    

    /* Search Text in all 3 fields */
function searchUtil(item,toSearch)
{
    /* Search Text in all 3 fields */
    return ( item.firstname.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.lastname.toLowerCase().indexOf(toSearch.toLowerCase()) > -1 || item.EmpId == toSearch
                            )                              
                     ? true : false ;
}
