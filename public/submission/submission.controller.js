(function () {
  'use strict';

  angular
    .module('app.submission')
    .controller('SubmissionController', SubmissionController);

  SubmissionController.$inject = ['$log'];
  function SubmissionController ($log) {
    var vm = this;

    // *********************************** //
    // End of exposed properties and methods.

    (function activate () {
      $log.debug('Activated SubmissionController.');
    })();
  }
})();
