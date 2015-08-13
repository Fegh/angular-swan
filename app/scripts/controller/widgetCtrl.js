'use strict';
angular.module('app.ui.widgetControllers', [])
  .controller("guageCtrl", function ($scope) {

    $scope.data = {
      guageOption: {
        show: true,
        startPercent: .75,
        barWidth: 6,
        paddingRadius: .05,
        pointer: {
          percent: .65,
          length: 40,
          radius: 4
        },
        sections: [
          {
            percent: .1,
            className: "chart-color1"
          }, {
            percent: .1,
            className: "chart-color2"
          }, {
            percent: .1,
            className: "chart-color3"
          }, {
            percent: .1,
            className: "chart-color4"
          }, {
            percent: .1,
            className: "chart-color5"
          }, {
            percent: .1,
            className: "chart-color6"
          }, {
            percent: .1,
            className: "chart-color7"
          }, {
            percent: .1,
            className: "chart-color8"
          }, {
            percent: .1,
            className: "chart-color9"
          }, {
            percent: .1,
            className: "chart-color0"
          }
        ]
      }
    };

  })
  .controller('widgetCtrl', function ($scope) {

    /*easyPieChart*/
    $scope.easyPiePercent1 = 85;
    $scope.easyPieOptions1 = {
      animate: {
        duration: 1000,
        enabled: true
      },
      size: 60,
      barColor: '#fe5770',
      trackColor: '#e5e9ec',
      scaleColor: false,
      lineWidth: 4,
      lineCap: 'circle'
    };

    $scope.easyPiePercent2 = 56;
    $scope.easyPieOptions2 = {
      animate: {
        duration: 1000,
        enabled: true
      },
      size: 60,
      barColor: '#fe7829',
      trackColor: '#e5e9ec',
      scaleColor: false,
      lineWidth: 4,
      lineCap: 'circle'
    };

    $scope.easyPiePercent3 = 27;
    $scope.easyPieOptions3 = {
      animate: {
        duration: 1000,
        enabled: true
      },
      size: 60,
      barColor: '#aa89e7',
      trackColor: '#e5e9ec',
      scaleColor: false,
      lineWidth: 4,
      lineCap: 'circle'
    };

    $scope.easyPiePercent4 = 45;
    $scope.easyPieOptions4 = {
      animate: {
        duration: 1000,
        enabled: true
      },
      size: 60,
      barColor: '#00d2ed',
      trackColor: '#e5e9ec',
      scaleColor: false,
      lineWidth: 4,
      lineCap: 'circle'
    };


    /*Sparkline chart*/
    $scope.sparklineData = [23, 23, 53, 56, 12,
      36, 48, 24, 64, 54,
      51, 48, 33, 40, 37,
      27, 20, 21, 36, 39];
    $scope.sparklineOptions = {
      bar: {
        data: $scope.sparklineData,
        description: 'Price',
        height: 50,
        title: 'Bar Chart',
        type: 'bar',
        width: 80
      },
      area: {
        data: $scope.sparklineData,
        description: 'Volume',
        height: 50,
        title: 'Area Chart',
        type: 'area',
        width: 80
      },
      binary: {
        data: $scope.sparklineData,
        description: 'Active',
        title: 'Binary Chart',
        type: 'binary',
        height: 50,
        width: 80
      },
      line: {
        data: $scope.sparklineData,
        description: 'Time',
        endValue: true,
        height: 50,
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
      51, 48, -4, 33, 40, 37,
      27, 20, 21, 36, 39,
      23, -23, 53, 56, -12,
      36, 48, 24, 64, 54, -5,
      51, 48, -4, 33, 40, 37,
      27, 20, 21, 36, 39];
    $scope.sparklineOptions1 = {
      bar: {
        data: $scope.sparklineData1,
        description: 'Price',
        height: 50,
        title: 'Bar Chart',
        type: 'bar',
        width: '200'
      }
    };

  });
