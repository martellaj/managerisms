(function() {
	angular
		.module('app')
		.controller('MainController', MainController);
	
	/**
	 * The MainController code.
	 */
	MainController.$inject = ['$log', '$firebaseArray'];
	function MainController($log, $firebaseArray) {
		var vm = this;
		
		// Methods
		vm.addData = addData;
		
		/////////////////////////////////////////
		// End of exposed properties and methods.
		
		/**
		 * This function does any initialization work the 
		 * controller needs.
		 */
		(function activate() {
			$log.debug('Activated MainController.');
			
			var ref = new Firebase('https://managerisms.firebaseio.com');
			vm.data = $firebaseArray(ref);
			
			console.log('vm.data', vm.data);
		})(); 
		
		function addData() {
			$log.debug(vm.data);
			vm.data.$add({
				'name': 'Joe',
				'age': 24
			});	
		}
	};
})();
