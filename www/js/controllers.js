angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
  $scope.selected = Contacts.all().filter(function(x){ return x.selected; })
  $scope.logSelected = function() {console.log(Contacts.all().filter(function(x){ return x.selected; }));}
  $scope.sendText = function(){};
  $scope.sendEmail = function(){};
})

.controller('CrisisCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
})

.controller('ContactsCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('AccountCtrl', function($scope) {
});
