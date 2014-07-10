angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
  $scope.getSelected = function() {$scope.selected = Contacts.all().filter(function(x){ return x.selected; });}
  $scope.logSelected = function() {
    $scope.getSelected();
    console.log($scope.selected);
  }
  $scope.sendText = function(){
    $scope.getSelected();
    for(var i = 0; i < $scope.selected.length; i++){
      console.log($scope.selected[i].phone);
    }
  };
  $scope.sendEmail = function(){
    $scope.getSelected();
    for(var i = 0; i < $scope.selected.length; i++){
      var sendgrid  = require('sendgrid')(api_user, api_key);
      sendgrid.send({
        to:       $scope.selected[i].email,
        from:     'other@example.com',
        subject:  'Emergency! I need your help',
        text:     'My first email through SendGrid.'
      }, function(err, json) {
        if (err) { return console.error(err); }
        console.log(json);
      });
      console.log($scope.selected[i].email);
    }
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
