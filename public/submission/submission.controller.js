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
          company: vm.company
        }
      };

      $http(req)
        .then(function (res) {
          $log.debug('Submitted managerism successfully.');
          reset(form);
        }, function (err) {
          $log.error(err);
          reset(form);
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

      // Reset form.
      form.$setPristine();
      vm.isSubmitting = false;

      // ngMessages clearing errors workaround (https://github.com/angular/material/issues/1903).
      form.quote.$touched = false;
      form.company.$touched = false;
    }
  }
})();
