/* global angular */

(function () {
  angular
    .module('app', [
      'ngRoute',
      'ngMaterial',
      'ngMdIcons',
      'app.managerism'
    ])
    .config(config);

  function config ($routeProvider, $locationProvider) {
    // Configure the routes.
    $routeProvider
      .when('/', {
        templateUrl: 'client/managerism/managerism.html',
        controller: 'ManagerismController',
        controllerAs: 'managerism'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Make the URLs pretty.
    $locationProvider.html5Mode(true);
  }
})();
