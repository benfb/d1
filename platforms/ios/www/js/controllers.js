angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts, $ionicPopup) {
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
      console.log($scope.selected[i].email);
    }
  };
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Don\'t eat that!',
      template: 'It might taste good'
    });
    alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
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
