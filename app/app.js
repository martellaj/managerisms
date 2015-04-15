'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider

		.when('/view1', {
			templateUrl: 'views1/view1.html',
			controller: 'view1Controller',
			controllerAs: 'view1'
		})

		.when('/view2', {
			templateUrl: 'app/views2/view2.html',
			controller: 'view2Controller',
			controllerAs: 'view2'
		})

		// Send all other requests to root.
		.otherwise({ redirectTo: '/' });

		// Make URLs pretty.
		$locationProvider.html5Mode(true); 
}]);
