'use strict';
angular.module('app.ui.timeline', [])
  .directive('timelineBadge', function () {
    return {
      require: '^timelineNode',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<div ng-transclude class="timeline-badge"></div>'
    };
  })
  .directive('timelineContent', function () {
    return {
      require: '^timelinePanel',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<div class="timeline-body" ng-transclude></div>'
    };
  })
  .directive('timeline', function () {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<ul class="timeline" ng-transclude></ul>'
    };
  })
  .directive('timelineFooter', function () {
    return {
      require: '^timelineContent',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<div class="timeline-footer" ng-transclude></div>'
    };
  })
  .directive('timelineHeading', function () {
    return {
      require: '^timelinePanel',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<div class="timeline-heading" ng-transclude></div>'
    };
  })
  .directive('timelineNode', function () {
    return {
      require: '^timeline',
      scope: {
        side: '@'
      },
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<li ng-class="{\'timeline-inverted\': side == \'right\'}" ng-transclude></li>'
    };
  })
  .directive('timelinePanel', function () {
    return {
      require: '^timeline',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<div class="timeline-panel" ng-transclude></div>'
    };
  })
  .directive('timelineImg', function () {
    return {
      require: '^timeline',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<div class="timeline-img" ng-transclude></div>'
    };
  }).directive('timelineTitle', function () {
    return {
      require: '^timelineHeading',
      restrict: 'AE',
      replace: true,
      transclude: true,
      template: '<h4 class="timeline-title" ng-transclude></h4>'
    };
  });
