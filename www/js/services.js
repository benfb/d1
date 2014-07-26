angular.module('d1.services', [])

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
      var filtered = angular.fromJson(window.localStorage['contacts']).filter(function(x){ return x.selected; });
      var contactString = window.localStorage['contacts'];
      if(filtered.length > 0) {
        return filtered;
      }
      else {
        return angular.fromJson(contactString);
      }
    },
    save: function(contacts) {
      window.localStorage['contacts'] = angular.toJson(contacts);
    }
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
})

.factory('User', function() {
  var user = [];

  return {
    get: function() {
      return angular.fromJson(window.localStorage['user']);
    },
    save: function(user) {
      window.localStorage['user'] = angular.toJson(user);
    }
  }
});
