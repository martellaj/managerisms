/* global angular */

(function () {
  angular
    .module('app.managerism')
    .controller('ManagerismController', ManagerismController);

  /**
   * The ManagerismController code.
   */
  ManagerismController.$inject = ['$log', 'managerismFactory'];
  function ManagerismController ($log, managerismFactory) {
    var vm = this;

    // Properties
    vm.managerism;
    
    // Methods
    vm.getManagerism = getManagerism;

    /** ********************************* **/
    // End of exposed properties and methods.

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated ManagerismController.');
      
      getManagerism();
    })();
    
    /**
     * @name getManagerism
     * @desc Gets a managerism from Firebase via the factory.
     */
    function getManagerism () {
      managerismFactory.getManagerism().then(function (managerism) {
        vm.managerism = managerism;
      });
    }
  }
})();
