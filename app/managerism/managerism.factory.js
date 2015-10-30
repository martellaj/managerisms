(function() {
'use strict';

	angular
		.module('app.managerism')
		.factory('managerismFactory', managerismFactory);

	managerismFactory.$inject = ['$log', '$firebaseArray', '$q'];
	function managerismFactory($log, $firebaseArray, $q) {
		var service = {
			getManagerism: getManagerism
		};
		
		return service;

		/////////////////////////////////////////
		// End of exposed properties and methods.

		/**
		 * @name getManagerism
		 * @desc Gets a random managerism from Firebase.
		 * @returns {String}
		 */
		function getManagerism() {
			var deferred = $q.defer();
			
			var managerismsCollectionRef = new Firebase('https://managerisms.firebaseio.com/managerisms');
			var managerismsCollection = $firebaseArray(managerismsCollectionRef);

			// Wait for collection to load, and then do work.
			managerismsCollection.$loaded().then(function() {
				var random = Math.floor(Math.random() * managerismsCollection.length);				
				var managerism = managerismsCollection[random];
				
				$log.debug('managerism', managerism);
				deferred.resolve(managerism);	
			});		
			
			return deferred.promise;
		}
	}
})();