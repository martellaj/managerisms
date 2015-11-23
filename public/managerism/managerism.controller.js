(function () {
  angular
    .module('app.managerism')
    .controller('ManagerismController', ManagerismController);

  /**
   * The ManagerismController code.
   */
  ManagerismController.$inject = ['$log', 'managerismFactory', '$http', 'authFactory', '$mdToast'];
  function ManagerismController ($log, managerismFactory, $http, authFactory, $mdToast) {
    var vm = this;

    // Properties
    vm.managerism = {
      quote: 'Make friends first, make sales second, make love third. In no particular order.',
      company: 'Dunder Mifflin'
    };
    vm.isSignedIn = false;
    vm.messageText = 'Placeholder message goes here.';
    vm.messageShow = false;

    // Methods
    vm.getManagerism = getManagerism;
    vm.tweet = tweet;

    /** ********************************* **/
    // End of exposed properties and methods.

    /**
     * This function does any initialization work the
     * controller needs.
     */
    (function activate () {
      $log.debug('Activated ManagerismController.');

      authFactory.isSignedIn()
        .then(function (res) {
          vm.isSignedIn = res;
        });
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

    /**
     * @name tweet
     * @desc Tweets the current managerism.
     */
    function tweet () {
      var req = {
        method: 'POST',
        url: '/twitter/tweet',
        data: {
          tweet: vm.managerism.quote
        }
      };

      $http(req)
        .then(function (res) {
          displayMessage('Just shouted this managerism into the void.');
        }, function (err) {
          if (err === 400) {
            displayMessage('This managerism is too long to tweet.');
          } else {
            displayMessage('Something went wrong.');
          }
        });
    }

    /**
     * @name displayMessage
     * @desc Shows a message.
     * @param text The message to show.
     */
    function displayMessage (text) {
      $mdToast.show(
        $mdToast.simple()
          .content(text)
          .position('top left')
          .hideDelay(3000)
      );
    }
  }
})();
