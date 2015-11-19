(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('authFactory', authFactory);

  authFactory.$inject = ['$http'];
  function authFactory ($http) {
    var service = {
      isSignedIn: isSignedIn,
      signIn: signIn,
      signOut: signOut
    };

    return service;

    // *********************************** //
    // End of exposed properties and methods.

    function signIn () {
      window.location = 'http://127.0.0.1:3000/auth/twitter';
    }

    function signOut () {
      window.location = 'http://127.0.0.1:3000/auth/twitter/logOut';
    }

    function isSignedIn () {
      return $http.get('/auth/twitter/isSignedIn');
    }
  }
})();
