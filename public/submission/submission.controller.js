(function () {
  'use strict';

  angular
    .module('app.submission')
    .controller('SubmissionController', SubmissionController);

  SubmissionController.$inject = ['$log', '$http', '$mdToast'];
  function SubmissionController ($log, $http, $mdToast) {
    var vm = this;

    // Properties
    vm.quote;
    vm.company;
    vm.emailAddress;
    vm.isSubmitting = false;

    // Methods
    vm.submit = submit;

    // *********************************** //
    // End of exposed properties and methods.

    (function activate () {
      $log.debug('Activated SubmissionController.');
    })();

    function submit (form) {
      $log.debug('Form submit handler called.');

      // Disable the form while submitting.
      vm.isSubmitting = true;

      var req = {
        method: 'POST',
        url: '/managerism/submit',
        data: {
          quote: vm.quote,
          company: vm.company,
          emailAddress: vm.emailAddress
        }
      };

      $http(req)
        .then(function (res) {
          $log.debug('Submitted managerism successfully.');
          reset(form);
          displayMessage('Thanks for your submission!');
        }, function (err) {
          $log.error(err);
          reset(form);
          displayMessage('Oops! Something went wrong with your submission.');
        });
    }

    /**
     * @name reset
     * @desc Resets the form and models the form uses.
     * @param form The HTML form.
     */
    function reset (form) {
      // Reset values.
      vm.quote = '';
      vm.company = '';
      vm.emailAddress = '';

      // Reset form.
      form.$setPristine();
      vm.isSubmitting = false;

      // ngMessages clearing errors workaround (https://github.com/angular/material/issues/1903).
      form.quote.$touched = false;
      form.company.$touched = false;
      form.emailAddress.$touched = false;
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
          .position('bottom right')
          .hideDelay(3000)
      );
    }
  }
})();
