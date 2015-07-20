(function() {
  angular
    .module('seedApp', [
      'ngRoute',
      'ui.bootstrap'
    ])
    .config(config); 
  
  function config($routeProvider, $locationProvider) {
    // Configure the routes. 
  	$routeProvider
  		.when('/view1', {
  			templateUrl: 'views/view1.html',
  			controller: 'View1Controller',
  			controllerAs: 'view1'
  		}) 
  		.when('/view2', {
  			templateUrl: 'views/view2.html',
  			controller: 'View2Controller',
  			controllerAs: 'view2'
  		})  
  		.otherwise({ 
        redirectTo: '/view1' 
      });
  
  	// Make the URLs pretty.
  	$locationProvider.html5Mode(true); 
  };
})();

