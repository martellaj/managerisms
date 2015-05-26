(function() {
	angular.module('seedApp')
	.controller('View1Controller', View1Controller);
	
	// Inject dependencies to protect app from minification.
	View1Controller.$inject = ['$log'];
	
	/**
	 * The View1Controller code.
	 */
	function View1Controller($log) {
		var vm = this;
		
		// Properties
		vm.name = 'Joe';
		vm.greeting; 
		
		// Methods
		vm.greet = greet;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		// Activate controller when it loads.
		activate();
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		function activate() {
			$log.debug('Activated View1Controller.');
		};
		
		/**
		 * This function builds a greeting.
		 */
		function greet() {
			vm.greeting = 'Hello, ' + vm.name + '!'; 
			$log.debug('Intialized greeting.');
		};
	};
})();
