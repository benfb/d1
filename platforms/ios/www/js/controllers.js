angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts, $http, showAlert) {
  $scope.contacts = Contacts.all();
  //$scope.getSelected = function() {Contacts.getSelected() = Contacts.all().filter(function(x){ return x.selected; });}
  $scope.logSelected = function() {
    //$scope.getSelected();
    console.log(Contacts.getSelected());
  }
  $scope.sendText = function(){
    //$scope.getSelected();
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/sms', data: {"selected": Contacts.getSelected()}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
  $scope.sendEmail = function(){
    //$scope.getSelected();
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/email', data: {"selected": Contacts.getSelected()}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
})

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
