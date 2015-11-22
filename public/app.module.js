(function () {
  angular
    .module('app', [
      'ngRoute',
      'ngMaterial',
      'ngMdIcons',
      'app.managerism',
      'app.auth',
      'app.submission'
    ])
    .config(config);

  function config ($routeProvider, $locationProvider) {
    // Configure the routes.
    $routeProvider
      .when('/', {
        templateUrl: 'managerism/managerism.html',
        controller: 'ManagerismController',
        controllerAs: 'managerism'
      })
      .when('/submission', {
        templateUrl: 'submission/submission.html',
        controller: 'SubmissionController',
        controllerAs: 'submission'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Make the URLs pretty.
    $locationProvider.html5Mode(true);
  }
})();
