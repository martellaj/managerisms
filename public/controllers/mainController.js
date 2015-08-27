(function() {
	angular
		.module('app')
		.controller('MainController', MainController);
	
	/**
	 * The MainController code.
	 */
	MainController.$inject = ['$log'];
	function MainController($log) {
		var vm = this;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		(function activate() {
			$log.debug('Activated MainController.');
		})(); 
	};
})();
