'use strict';
angular.module('app.ui.tableControllers', [])
  .controller('tableCtrl', function ($scope, $http) {
    $http.get('scripts/data/tableData.json').success(function (data) {
      $scope.tables = data;
    });

    /*Sparkline chart*/
    $scope.sparklineData = [23, 23, 53, 56, 12,
      36, 48, 24, 64, 54,
      51, 48, 33, 40, 37,
      27, 20, 21, 36, 39];
    $scope.sparklineOptions = {
      bar: {
        data: $scope.sparklineData,
        description: 'Price',
        height: 20,
        title: 'Bar Chart',
        type: 'bar',
        width: 80
      },
      area: {
        data: $scope.sparklineData,
        description: 'Volume',
        height: 20,
        title: 'Area Chart',
        type: 'area',
        width: 80
      },
      binary: {
        data: $scope.sparklineData,
        description: 'Active',
        title: 'Binary Chart',
        type: 'binary',
        height: 20,
        width: 80
      },
      line: {
        data: $scope.sparklineData,
        description: 'Time',
        endValue: true,
        height: 20,
        maxValue: true,
        minValue: true,
        startValue: true,
        title: 'Line Graph',
        type: 'line',
        width: 80
      }
    };

    /*Sparkline chart*/
    $scope.sparklineData1 = [
      23, -23, 53, 56, -12,
      36, 48, 24, 64, 54, -5,
      27, 20, 21, 36, 39];
    $scope.sparklineOptions1 = {
      bar: {
        data: $scope.sparklineData1,
        description: 'Price',
        height: 20,
        title: 'Bar Chart',
        type: 'bar',
        width: '80'
      },
      area: {
        data: $scope.sparklineData,
        description: 'Volume',
        height: 30,
        title: 'Area Chart',
        type: 'area',
        width: 80
      },
      binary: {
        data: $scope.sparklineData,
        description: 'Active',
        title: 'Binary Chart',
        type: 'binary',
        height: 20,
        width: 80
      },
      line: {
        data: $scope.sparklineData,
        description: 'Time',
        endValue: true,
        height: 30,
        maxValue: true,
        minValue: true,
        startValue: true,
        title: 'Line Graph',
        type: 'line',
        width: 80
      }

    };

  })
  .controller('BootstrapIntegrationCtrl', function BootstrapIntegrationCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder
      .fromSource('scripts/data/tableData.json')
      // Add Bootstrap compatibility
      .withBootstrap();
    vm.dtColumns = [
      DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
      DTColumnBuilder.newColumn('firstName').withTitle('First name'),
      DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];
  });




