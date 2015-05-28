(function() {
	angular
		.module('seedApp')
		.controller('View2Controller', View2Controller);
	
	// Inject dependencies to protect app from minification.
	View2Controller.$inject = ['$log'];
	
	/**
	 * The View2Controller code.
	 */
	function View2Controller($log) {
		var vm = this;
		
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
		};
	};
})();
