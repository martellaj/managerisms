(function() {
	angular.module('seedApp')
	.controller('View1Controller', View1Controller);
	
	function View1Controller() {
		var vm = this;
		
		// Properties
		vm.name = 'Joe';
		vm.greeting = ''; 
		
		// Methods
		vm.greet = greet;
		
		////////////////////////////////
		
		/**
		 * This function builds a greeting.
		 */
		function greet() {
			vm.greeting = 'Hello, ' + vm.name + '!'; 
		};
	};
})();
