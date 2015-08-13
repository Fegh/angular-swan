'use strict';
angular.module('app.ui.mapController', [])
  .controller('mapCtrl', function ($scope, leafletData) {
    angular.extend($scope, {
      center: {
        autoDiscover: true
      }
    });
  })
  .controller('BasicTilesZoomChangerController', ["$scope", function ($scope) {

    angular.extend($scope, {
      london: {
        lat: 51.505,
        lng: -0.09,
        zoom: 10
      },
      tiles: {
        url: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      }
    });

    $scope.$watch("london.zoom", function (zoom) {
      $scope.tiles.url = (zoom > 12)
        ? "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        : "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
    });

  }])
  .controller("BasicMaxBoundsPadController", ["$scope", "leafletBoundsHelpers", function ($scope, leafletBoundsHelpers) {

    var maxbounds = leafletBoundsHelpers.createBoundsFromArray([
      [37.8866, -79.4877],
      [39.7230, -74.9863]
    ]);


    maxbounds.pad = 1.0;

    angular.extend($scope, {
      bounds: maxbounds,
      center: {
        lat: 37.8866,
        lng: -79 - 4877,
        zoom: 4
      },
      layers: {
        baselayers: {
          xyz: {
            name: 'OpenStreetMap (XYZ)',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            type: 'xyz'
          }
        },
        overlays: {}
      },
      markers: {
        northeast: {
          lat: 39.7230,
          lng: -74.9863,
          focus: true,
          title: "Northeast"
        },
        southwest: {
          lat: 37.8866,
          lng: -79.4877,
          title: "Southwest"
        }
      },
      maxbounds: maxbounds
    });
  }]);
