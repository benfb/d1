angular.module('d1.controllers', [])

.controller('AlertCtrl', function($scope, Contacts, $http, showAlert, User) {
  $scope.contacts = Contacts.all();
  $scope.user = User.get();
  $scope.sendText = function(){
    Contacts.save($scope.contacts);
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/sms', data: {"selected": Contacts.getSelected(), "user": User.get()}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
  $scope.sendEmail = function(){
    Contacts.save($scope.contacts);
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/email', data: {"selected": Contacts.getSelected(), "user": User.get()}, responseType: "text"}).
      success(function(data) {
        showAlert.show("Success", data);
      }).
      error(function(data) {
        showAlert.show("Error", data);
      });
  };
})

.controller('CrisisCtrl', function($scope, Contacts, $http, showAlert, User) {
  $scope.contacts = Contacts.all();
  $scope.sendCrisis = function() {
    $http({method: 'POST', url: 'http://d1backend-bfb.rhcloud.com/crisis', data: {"selected": Contacts.all(), "user": User.get()}, responseType: "text"}).
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

.controller('SettingsCtrl', function($scope, User, showAlert, $http) {
  $scope.oldUser = User.get();
  $scope.saveUser = function(newUser) {
    User.save(newUser);
    showAlert.show("User Updated", "Your information has been updated.").then(function(res) {
      $scope.oldUser = User.get();
    })
  }
});
