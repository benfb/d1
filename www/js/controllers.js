angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts, $http, showAlert) {
  $scope.contacts = Contacts.all();
  $scope.sendText = function(){
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/sms', data: {"selected": Contacts.getSelected()}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
  $scope.sendEmail = function(){
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/email', data: {"selected": Contacts.getSelected()}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
})

.controller('CrisisCtrl', function($scope, Contacts, $http, showAlert) {
  $scope.contacts = Contacts.all();
  $scope.sendCrisis = function() {
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/sms', data: {"selected": Contacts.all(), "crisis": true}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/email', data: {"selected": Contacts.all(), "crisis": true}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
})

.controller('ContactsCtrl', function($scope, Contacts, $ionicModal) {
  $scope.contacts = Contacts.all();
  console.log(window.localStorage['contacts']);
  $ionicModal.fromTemplateUrl('new-contact.html', function(modal) {
    $scope.contactModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  $scope.createContact = function(contact) {
    $scope.contacts.push({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      id: Contacts.all().length
    });
    Contacts.save($scope.contacts);
    $scope.contactModal.hide();
    contact.name = "";
    contact.email = "";
    contact.phone = "";
    contact.id = null;
  };

  $scope.newContact = function() {
    $scope.contactModal.show();
  };

  $scope.closeNewContact = function() {
    $scope.contactModal.hide();
  };
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts, showAlert, $ionicNavBarDelegate) {
  $scope.contacts = Contacts.all();
  $scope.contact = Contacts.get($stateParams.contactId);
  $scope.deleteContact = function(index) {
    $scope.contacts.splice($scope.contacts.indexOf($scope.contact), 1);
    Contacts.save($scope.contacts);
    showAlert.show("Contact Deleted", "Your contact " + $scope.contact.name + " has been removed.").then(function(res) {
      $ionicNavBarDelegate.back();
    });
  }
})

.controller('AccountCtrl', function($scope) {
});
