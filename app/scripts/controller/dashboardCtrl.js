'use strict';
angular.module('app.ui.dashboardControllers', [])
  .controller('dashboardCtrl', function ($scope, $interval, $log) {

    var promise = $interval(function () {
      $scope.data1 = Math.floor(Math.random() * 10000);
      $scope.data2 = Math.floor(Math.random() * 10000);
      $scope.data3 = Math.floor(Math.random() * 10000);
      $scope.percentage1 = Math.floor(Math.random() * 100);
      $scope.percentage2 = Math.floor(Math.random() * 100);
      $scope.percentage3 = Math.floor(Math.random() * 100);


    }, 1000);

    $scope.$on('$destory', function () {
      $interval.cancle(promise);
    });

    $scope.lists = [
      {id: '1', time: '12:00', status: 'blue', detail: 'Send new update quote to client.'},
      {id: '2', time: '13:00', status: 'lightBlue', detail: 'Send new update quote to client.'},
      {id: '3', time: '7:00', status: 'green', detail: 'New tasks needs to be done!'},
      {id: '4', time: '8:00', status: 'red', detail: 'Talk with John about the new look.'},
      {id: '5', time: '10:00', status: 'orange', detail: 'New tasks needs to be done!'}
    ];

    $scope.newTask = '';
    $scope.addLists = function () {
      var taskDetail;
      taskDetail = $scope.newTask.trim();
      if (taskDetail.length === 0) {
        return;
      }
      $scope.lists.push({
        id: Math.floor(Math.random() * 100),
        time: new Date(),
        status: 'green',
        detail: taskDetail

      });
      $scope.newTask = '';
    };

  })
  .controller('ExampleCtrl', function ($scope, $http, $timeout, cfpLoadingBar) {

    $scope.start = function () {
      cfpLoadingBar.start();
    };
    $scope.complete = function () {
      cfpLoadingBar.complete();
    }
    $scope.start();
    $timeout(function () {
      $scope.complete();
    }, 750);

  });
