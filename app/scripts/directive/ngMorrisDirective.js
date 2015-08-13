"use strict";
(function () {

  var module = angular.module("ngMorrisChart", []);
  module.directive('barChart', barChart);
  module.directive('donutChart', donutChart);
  module.directive('lineChart', lineChart);
  module.directive('areaChart', areaChart);

  function donutChart() {
    return {
      restrict: 'A',
      scope: {
        donutData: '=',
        colors: '@'
      },
      link: function (scope, elem, attrs) {
        var colors;
        if (scope.colors === void 0 || scope.colors === '') {
          colors = null;
        } else {
          colors = JSON.parse(scope.colors);
        }
        scope.$watch('donutData', function () {
          if (scope.donutData) {
            if (!scope.donutInstance) {
              scope.donutInstance = new Morris.Donut({
                element: elem,
                data: scope.donutData,
                colors: ['#91d03c', '#00b3f9', '#aa89e7', '#00d2ed', '#f987c2', '#fea875', '#fe5770']
              });
            } else {
              scope.donutInstance.setData(scope.donutData);
            }
          }
        })
      }
    }
  }

  function barChart() {
    return {
      restrict: 'A',
      scope: {
        barX: '@',
        barY: '@',
        barLabels: '@',
        barColors: '@',
        barData: '='
      },
      link: function (scope, elem, attrs) {
        var colors;
        if (scope.barColors === void 0 || scope.barColors === '') {
          colors = null;
        } else {
          colors = JSON.parse(scope.barColors);
        }
        scope.$watch('barData', function () {
          if (scope.barData) {
            if (!scope.barInstance) {
              scope.barInstance = new Morris.Bar({
                element: elem,
                data: scope.barData,
                xkey: scope.barX,
                ykeys: JSON.parse(scope.barY),
                labels: JSON.parse(scope.barLabels),
                xLabelMargin: 2,
                barColors: colors || ['#91d03c', '#00b3f9', '#aa89e7', '#00d2ed', '#f987c2', '#fea875', '#fe5770']
              });
            } else {
              scope.barInstance.setData(scope.barData);
            }
          }
        })
      }
    }
  }

  function lineChart() {
    return {
      restrict: 'A',
      scope: {
        lineData: '=',
        lineXkey: '@',
        lineYkeys: '@',
        lineLabels: '@',
        lineColors: '@'
      },
      link: function (scope, elem, attrs) {
        var colors;
        if (scope.lineColors === void 0 || scope.lineColors === '') {
          colors = null;
        } else {
          colors = JSON.parse(scope.lineColors);
        }
        scope.$watch('lineData', function () {
          if (scope.lineData) {
            if (!scope.lineInstance) {
              scope.lineInstance = new Morris.Line({
                element: elem,
                data: scope.lineData,
                xkey: scope.lineXkey,
                ykeys: JSON.parse(scope.lineYkeys),
                labels: JSON.parse(scope.lineLabels),
                lineColors: colors || ['#91d03c', '#00b3f9', '#aa89e7', '#00d2ed', '#f987c2', '#fea875', '#fe5770']
              });
            } else {
              scope.lineInstance.setData(scope.lineData);
            }
          }
        });
      }
    }
  }

  function areaChart() {
    return {
      restrict: 'A',
      scope: {
        areaData: '=',
        areaXkey: '@',
        areaYkeys: '@',
        areaLabels: '@',
        lineColors: '@'
      },
      link: function (scope, elem, attrs) {
        var colors;
        if (scope.lineColors === void 0 || scope.lineColors === '') {
          colors = null;
        } else {
          colors = JSON.parse(scope.lineColors);
        }
        scope.$watch('areaData', function () {
          if (scope.areaData) {
            if (!scope.areaInstance) {
              scope.areaInstance = new Morris.Area({
                element: elem,
                data: scope.areaData,
                xkey: scope.areaXkey,
                ykeys: JSON.parse(scope.areaYkeys),
                labels: JSON.parse(scope.areaLabels),
                lineColors: ['#91d03c', '#b7c1c5', '#aa89e7', '#00d2ed', '#f987c2', '#fea875', '#fe5770']
              });
            } else {
              scope.areaInstance.setData(scope.areaData);
            }
          }
        });
      }
    }
  }
})();
