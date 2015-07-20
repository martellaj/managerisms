(function () {
	angular
		.module('seedApp')
		.controller('NavbarController', NavbarController);
	
	// Inject dependencies to protect app from minification.
	NavbarController.$inject = ['$log'];
	
	/**
	 * The NavbarController code.
	 */
	function NavbarController($log) {
		var vm = this;
		
		// Properties
		vm.isCollapsed;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		// Activate controller when it loads.
		activate();
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		function activate() {
			$log.debug('Activated View2Controller.');
			vm.isCollapsed = true;
		};
	};
})();
