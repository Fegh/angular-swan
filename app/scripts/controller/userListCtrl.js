'use strict';
angular.module('app.ui.userListControllers', [])
  .controller('userListCtrl', function ($scope, $http) {
    $http.get('scripts/data/userListData.json').success(function (data) {
      $scope.users = data;
    });

  })
  .controller('sliderCtrl', function ($scope) {

    $scope.demo1 = {
      min: 20,
      max: 80
    };
    $scope.demo2 = {
      min: 20,
      max: 80
    };
    $scope.demo3 = {
      min: 20,
      max: 80
    };
    $scope.demo4 = {
      min: 20,
      max: 80
    };
    $scope.demo5 = {
      min: 20,
      max: 80
    };
    $scope.demo6 = {
      valueA: 5000,
      valueB: 3000
    };
    $scope.demo7 = {
      min: 20,
      max: 80
    };
    $scope.demo8 = {
      min: 20,
      max: 80
    };


  });




