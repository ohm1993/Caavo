'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'firebase',
  'myApp.version',
  'ngAnimate',
  'toastr',
  'ui.bootstrap',
  'ngResource'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
myApp.factory('user_data',function($q, $firebaseObject,$firebaseArray){
    var dataService = {};
     dataService.data = {};
     dataService.adminchatId = {};

    dataService.getuserData = function(user_email){
          var defer = $q.defer();
          var singleuser =  firebase.database().ref().child('Users').orderByChild('username').equalTo(user_email);
          singleuser.once('value',function(snapshot){
               angular.forEach(snapshot.val(),function(value,key){
                    defer.resolve(value);
               });
          });
          return defer.promise;
    };
    dataService.saveadhardetails = function(msg){
           //console.log("message value is",msg);
           var defer = $q.defer();
           var newKey = msg.who;
           var newPostKey = firebase.database().ref().child('User_aadharDetails').push().key;
           var adhar_data = {
                who    : msg.who,
                email : msg.email,
                adharnumber : msg.adharnumber,
                adharname:  msg.adharname,
                dob:msg.dob,
                time   : firebase.database.ServerValue.TIMESTAMP
            };
            var updates = {}; 
            updates['/User_aadharDetails/' + newKey + '/' + newPostKey] = adhar_data;
            firebase.database().ref().update(updates);
            defer.resolve("true");
           return defer.promise;         
    };
    dataService.savelicenceDetails = function(licence_data){
           //console.log("message value is",licence_data);
           var defer = $q.defer();
           var newKey = licence_data.who;
           var newPostKey = firebase.database().ref().child('User_licenceData').push().key;
           var licenceData = {
                who    : licence_data.who,
                email : licence_data.email,
                licencenumber : licence_data.licencenumber,
                drivername:  licence_data.drivername,
                vichicletype:licence_data.vichicletype,
                time   : firebase.database.ServerValue.TIMESTAMP
            };
            var updates = {}; 
            updates['/User_licenceData/' + newKey + '/' + newPostKey] = licenceData;
            firebase.database().ref().update(updates);
            defer.resolve("true");
           return defer.promise;         
    };
    //get currentlogged user aadhar details//
    dataService.getloggeduseraadharDetails = function(usr_id){
        var defer = $q.defer();
        var aadhardetails =  firebase.database().ref().child('User_aadharDetails').child(usr_id).orderByChild('time');
        aadhardetails.once('value', function(snapshot){
          if(snapshot.val() == null){
              defer.resolve(null);
          }else{
              angular.forEach(snapshot.val(),function(value,key){
                  defer.resolve(value);
              });
          }    
        });
        return defer.promise; 
    };
    dataService.getallusrData = function(){
            var defer = $q.defer();
            var all_users = [];
            var allusers =  firebase.database().ref().child('Users').orderByKey();
            allusers.once('value',function(snapshot){
                     angular.forEach(snapshot.val(),function(value,key){
                           all_users.push(value);
                     });
                     defer.resolve(all_users);
            });
            return defer.promise;        
    };
    return dataService;
});

