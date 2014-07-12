angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts, $ionicPopup, $http, ShowAlert) {
  $scope.contacts = Contacts.all();
  $scope.getSelected = function() {$scope.selected = Contacts.all().filter(function(x){ return x.selected; });}
  $scope.logSelected = function() {
    $scope.getSelected();
    console.log($scope.selected);
  }
  $scope.sendText = function(){
    $scope.getSelected();
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/sms', data: {"selected": $scope.selected}, responseType: "text"}).
      success(function(data) {
        ShowAlert.show("Success", data);
      }).
      error(function(data) {
        ShowAlert.show("Error", data);
      });
  };
  $scope.sendEmail = function(){
    $scope.getSelected();
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/email', data: {"selected": $scope.selected}, responseType: "text"}).
      success(function(data) {
        ShowAlert.show("Success", data);
      }).
      error(function(data) {
        ShowAlert.show("Error", data);
      });
  };
});

.controller('CrisisCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
  $scope.sendCrisis = function() {

  }
})

.controller('ContactsCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('AccountCtrl', function($scope) {
});
