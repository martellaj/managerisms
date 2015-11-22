(function () {
  'use strict';

  angular
    .module('app.submission')
    .controller('SubmissionController', SubmissionController);

  SubmissionController.$inject = ['$log', '$http'];
  function SubmissionController ($log, $http) {
    var vm = this;

    // Properties
    vm.quote;
    vm.company;

    // Methods
    vm.submit = submit;

    // *********************************** //
    // End of exposed properties and methods.

    (function activate () {
      $log.debug('Activated SubmissionController.');
    })();

    function submit () {
      $log.debug('Form submit handler called.');

      var req = {
        method: 'POST',
        url: '/managerism/submit',
        data: {
          quote: vm.quote,
          company: vm.company
        }
      };

      // $http(req)
      //   .then(function (res) {
      //     displayMessage('Just shouted this managerism into the void.');
      //   }, function (err) {
      //     if (err === 400) {
      //       displayMessage('This managerism is too long to tweet.');
      //     } else {
      //       displayMessage('Something went wrong.');
      //     }
      //   });
    }
  }
})();
