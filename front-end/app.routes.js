angular.module('routes', ['ngRoute'])

// Configure the routes.
.config(function($routeProvider, $locationProvider) {
	$routeProvider

		.when('/', {
			templateUrl: 'front-end/views/view1/view1.html',
			controller: 'view1Controller',
			controllerAs: 'view1'
		})

		.when('/view1', {
			templateUrl: 'front-end/views/view1/view1.html',
			controller: 'view1Controller',
			controllerAs: 'view1'
		})

		.when('/view2', {
			templateUrl: 'front-end/views/view2/view2.html',
			controller: 'view2Controller',
			controllerAs: 'view2'
		})

		.otherwise({ redirectTo: '/' });

	// Make the URLs pretty.
	$locationProvider.html5Mode(true); 
});