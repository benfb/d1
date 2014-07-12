angular.module('d1.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Contacts', function() {

  // Some fake testing data
  var contacts = [
    { id: 0, name: 'Scruff McGruff', email: 'smcgruff@gmail.com', phone: '(512) 574-8333' },
    { id: 1, name: 'G.I. Joe', email: 'bennettbailey@gmail.com', phone: '(512) 522-8276' },
    { id: 2, name: 'Miss Frizzle', email: 'benfbailey@gmail.com' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return contacts;
    },
    get: function(contactId) {
      // Simple index lookup
      return contacts[contactId];
    }
  }
});

.factory('ShowAlert', function() {
  var showalert = {};
  return {
    show: function() {
      return showalert;
    };
  }
});
