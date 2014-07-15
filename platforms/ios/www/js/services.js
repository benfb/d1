angular.module('d1.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Contacts', function() {
  var contacts = [];

  return {
    all: function() {
      var contactString = window.localStorage['contacts'];
      if(contactString) {
        return angular.fromJson(contactString);
      }
      return [];
    },
    get: function(contactId) {
      return (angular.fromJson(window.localStorage['contacts']).filter(function(x){ return x.id == contactId }))[0];
    },
    getSelected: function() {
      return angular.fromJson(window.localStorage['contacts']).filter(function(x){ return x.selected; })
    },
    save: function(contacts) {
      window.localStorage['contacts'] = angular.toJson(contacts);
    },
  }
})

.factory('showAlert', function($ionicPopup) {
  return {
    show: function(title, body) {
      return $ionicPopup.alert({
        title: title,
        template: body
      });
    }
  };
});
