angular.module('d1.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Contacts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [
    { id: 0, name: 'Scruff McGruff', email: 'smcgruff@gmail.com', phone: '512-574-8333' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
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