(function () {
	angular
		.module('app')
		.controller('NavbarController', NavbarController);

	/**
	 * The NavbarController code.
	 */
	NavbarController.$inject = ['$log'];
	function NavbarController($log) {
		var vm = this;
		
		// Properties
		vm.isCollapsed;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		(function activate() {
			$log.debug('Activated NavbarController.');
			vm.isCollapsed = true;
		})();
	};
})();
