angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
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
