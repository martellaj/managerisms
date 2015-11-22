(function () {
  'use strict';

  angular
    .module('app.managerism')
    .factory('managerismFactory', managerismFactory);

  managerismFactory.$inject = ['$log', '$q', '$http'];
  function managerismFactory ($log, $q, $http) {
    var service = {
      getManagerism: getManagerism
    };

    return service;

    /** ********************************* **/
    // End of exposed properties and methods.

    /**
     * @name getManagerism
     * @desc Gets a random managerism from the back.
     * @returns {Promise} When completed, returns an object with "quote" and "company" properties.
     */
    function getManagerism () {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: '/managerism'
      }).then(function (response) {
        deferred.resolve(response.data);
      }, function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  }
})();
