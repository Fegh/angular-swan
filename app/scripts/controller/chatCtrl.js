'use strict';
angular.module('app.ui.chatControllers', [])
  .controller('chatController', function ($rootScope, $scope) {

    $scope.chatUsers01 = [
      {
        name: 'Carlos  Flowers Flowers Flowers Flowers',
        online: true,
        img: 'a',
        detail: 'Designed for everyone, everywhere.!'
      },
      {
        name: 'Byron Taylor',
        online: true,
        img: 'b',
        detail: 'illions of amazing sites across the web are being built with Bootstrap.'
      },
      {name: 'Kate  Myers', online: false, img: 'c', detail: 'It is beautiful day!'},
      {name: 'Priscilla Hawkins', online: false, img: 'd', detail: 'Here you there?'},
      {name: 'Joe Barker', online: false, img: 'f', detail: 'Busy, Do not disturb.'}
    ];

    $scope.chatUsers02 = [
      {
        name: 'Veronica  Maxwell',
        online: true,
        img: 'e',
        job: "UI design",
        detail: 'We showcase dozens of inspiring projects built with Bootstrap on the Bootstrap Expo.'
      },
      {name: 'Jessica Webster', online: true, img: 'a', job: "Java developer", detail: 'It is beautiful day!'},
      {name: 'Jackie  Barton', online: true, img: 'd', job: "C++ developer", detail: 'Here you there?'},
      {name: 'Crystal Drake', online: false, img: 'b', job: "web design", detail: 'How are you!'},
      {
        name: 'Milton  Dean',
        online: false,
        img: 'a',
        job: "UI design",
        detail: 'Get started on your own with our growing collection of examples or by exploring some of our favorites.!'
      },
      {name: 'Joann Johnston', online: false, img: 'f', job: "UI design", detail: 'Busy, Do not disturb.'}
    ];

  });
