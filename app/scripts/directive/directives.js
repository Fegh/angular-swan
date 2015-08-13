'use strict';

angular.module('app.ui.directives', [])
  .directive('customBackground', function () {
    return {
      restrict: 'A',
      controller: [
        '$scope', '$element', '$location', function ($scope, $element, $location) {
          var addBg, path;
          path = function () {
            return $location.path();
          };
          addBg = function (path) {
            $element.removeClass('body-home body-special body-lock body-tasks');
            switch (path) {
              case '/':
                return $element.addClass('body-home');
              case '/404':
              case '/505':
              case '/lockScreen':
              case '/pages/signIn':
              case '/pages/signUp':
              case '/signUp':
              case '/signIn':
              case '/error':
                return $element.addClass('body-special');
              case '/pages/lockScreen':
                return $element.addClass('body-special body-lock');
              case '/tasks':
                return $element.addClass('body-tasks');
            }
          };
          addBg($location.path());
          return $scope.$watch(path, function (newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            return addBg($location.path());
          });
        }
      ]
    };
  }).directive('toggleMinNav', [
    '$rootScope', function ($rootScope) {
      return {
        restrict: 'A',
        link: function (scope, ele) {
          var $window, Timer, app, updateClass, logol, logos, toggleMin;
          app = $('#swanApp');
          logol = $('#logo-l');
          logos = $('#logo-s');
          toggleMin = $('.toggle-min');
          $window = $(window);
          ele.on('click', function (e) {
            if (app.hasClass('nav-min')) {
              app.removeClass('nav-min');
              logol.css('display', 'block');
              logos.css('display', 'none');
              toggleMin.css('left', '250px');
              localStorage.removeItem('minNav');
            } else {
              app.addClass('nav-min');
              logos.css('display', 'block');
              logol.css('display', 'none');
              toggleMin.css('left', '70px');
              localStorage.setItem('minNav', true);
              $rootScope.$broadcast('minNav:enabled');
            }
            return e.preventDefault();
          });
          if (localStorage.getItem('minNav')) {
            ele.click();
          }
          Timer = void 0;
          updateClass = function () {
            var width;
            width = $window.width();
            if (width < 768) {
              return app.removeClass('nav-min');
            }
          };
          return $window.resize(function () {
            var t;
            clearTimeout(t);
            return t = setTimeout(updateClass, 300);
          });
        }
      };
    }
  ]).directive('collapseNav', [
    function () {
      return {
        restrict: 'A',
        link: function (scope, ele) {
          var $a, $aRest, $lists, $listsRest, app, $fa, $faRest;
          $lists = ele.find('ul').parent('li');
          $a = $lists.children('a');
          $listsRest = ele.children('li').not($lists);
          $aRest = $listsRest.children('a');
          $faRest = $lists.children('a:first-child').children('i:odd');
          app = $('#swanApp');
          $a.on('click', function (event) {
            var $parent, $this;
            if (app.hasClass('nav-min')) {
              return false;
            }
            $this = $(this);
            $parent = $this.parent('li');
            $fa = $this.children('i:odd');

            $faRest.removeClass('fa-angle-down');
            $faRest.addClass('fa-angle-right');

            $lists.not($parent).removeClass('open').find('ul').slideUp();
            $parent.toggleClass('open').find('ul').slideToggle();

            if ($lists.hasClass('open')) {
              $fa.removeClass('fa-angle-right');
              $fa.addClass('fa-angle-down');
            } else {
              $fa.removeClass('fa-angle-down');
              $fa.addClass('fa-angle-right');
            }
            ;
            return event.preventDefault();
          });

          $aRest.on('click', function (event) {
            $faRest.removeClass('fa-angle-down');
            $faRest.addClass('fa-angle-right');
            return $lists.removeClass('open').find('ul').slideUp();
          });
          return scope.$on('minNav:enabled', function (event) {
            return $lists.removeClass('open').find('ul').slideUp();
          });
        }
      };
    }
  ])
  //form mobile-angular-ui
  .directive('uiPreventTouchmoveDefaults', function () {
    var preventTouchmoveDefaultsCb = function (e) {
      if (e.allowTouchmoveDefault !== true) {
        e.preventDefault();
      }
    };

    return {
      compile: function (element) {
        if ('ontouchmove' in document) {
          element.on('touchmove', preventTouchmoveDefaultsCb);
        }
      }
    };
  })
  .factory('allowTouchmoveDefault', function () {
    var fnTrue = function () {
      return true;
    };

    if ('ontouchmove' in document) {
      return function ($element, condition) {
        condition = condition || fnTrue;

        var allowTouchmoveDefaultCallback = function (e) {
          if (condition(e)) {
            e.allowTouchmoveDefault = true;
          }
        };

        $element = angular.element($element);
        $element.on('touchmove', allowTouchmoveDefaultCallback);

        $element.on('$destroy', function () {
          $element.off('touchmove', allowTouchmoveDefaultCallback);
          $element = null;
        });

        return function () {
          if ($element) {
            $element.off('touchmove', allowTouchmoveDefaultCallback);
          }
        };
      };
    } else {
      return angular.noop;
    }
  });
