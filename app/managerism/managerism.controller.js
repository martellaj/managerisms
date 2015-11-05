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

    /** ********************************* **/
    // End of exposed properties and methods.

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated ManagerismController.');

      // Get managerism.
      managerismFactory.getManagerism().then(function (managerism) {
        vm.managerism = managerism;
      });
    })();
  }
})();
