'use strict';
angular.module('app.ui.countToController', [])
  .controller('countToCtrl', function ($scope) {
    $scope.countTo = 100;
    $scope.countFrom = 0;

    $scope.loads = 45;

    $scope.times = 45;

  });
