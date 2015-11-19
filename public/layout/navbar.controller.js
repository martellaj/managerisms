(function () {
  angular
    .module('app')
    .controller('NavbarController', NavbarController);

  /**
   * The NavbarController code.
   */
  NavbarController.$inject = ['$log', '$http', 'authFactory'];
  function NavbarController ($log, $http, authFactory) {
    var vm = this;

    // Properties
    vm.isCollapsed;
    vm.isSignedIn = false;

    // Methods
    vm.signIn = signIn;
    vm.signOut = signOut;

    /** ********************************* **/
    // End of exposed properties and methods.

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated NavbarController.');
      vm.isCollapsed = true;

      authFactory.isSignedIn()
        .then(function (res) {
          vm.isSignedIn = res;
        });
    })();

    function signIn () {
      authFactory.signIn();
    }

    function signOut () {
      authFactory.signOut();
    }
  }
})();
