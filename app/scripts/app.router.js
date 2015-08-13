'use strict';

angular
  .module('swanApp')
  .config(function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  })
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;
  }])
  .config(function ($stateProvider, $urlRouterProvider) {

    //For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/index');

    //Now set up the states
    $stateProvider
      .state('index', {
        url: '/index',
        views: {
          'header': {
            templateUrl: 'views/sections/header.html'
          },
          'nav': {
            templateUrl: 'views/sections/nav.html'
          },
          'chat': {
            templateUrl: 'views/sections/chat.html'
          },
          'content': {
            templateUrl: 'views/dashboard.html'
          },
          'footer': {
            templateUrl: 'views/sections/footer.html'
          }
        }
      })
      .state('app', {
        url: '',
        abstract: true,
        views: {
          'header@': {
            templateUrl: 'views/sections/header.html'
          },
          'nav@': {
            templateUrl: 'views/sections/nav.html'
          },
          'chat@': {
            templateUrl: 'views/sections/chat.html'
          },
          'footer@': {
            templateUrl: 'views/sections/footer.html'
          }
        }
      })
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          'content@': {
            templateUrl: 'views/dashboard.html'
          }
        }
      })


      /*ui*/
      .state('app.button', {
        url: '/button',
        views: {
          'content@': {
            templateUrl: 'views/ui/buttons.html'
          }
        }
      })
      .state('app.icon', {
        url: '/icon',
        views: {
          'content@': {
            templateUrl: 'views/ui/icons.html'
          }
        }
      })
      .state('app.grid', {
        url: '/grid',
        views: {
          'content@': {
            templateUrl: 'views/ui/grid.html'
          }
        }
      })
      .state('app.panel', {
        url: '/panel',
        views: {
          'content@': {
            templateUrl: 'views/ui/panels.html'
          }
        }
      })
      .state('app.typography', {
        url: '/typography',
        views: {
          'content@': {
            templateUrl: 'views/ui/typography.html'
          }
        }
      })
      .state('app.messageNotifications', {
        url: '/messageNotifications',
        views: {
          'content@': {
            templateUrl: 'views/ui/messageNotifications.html'
          }
        }
      })
      .state('app.slider', {
        url: '/slider',
        views: {
          'content@': {
            templateUrl: 'views/ui/slider.html'
          }
        }
      })
      .state('app.tabsAccordian', {
        url: '/tabsAccordian',
        views: {
          'content@': {
            templateUrl: 'views/ui/tabsAccordian.html'
          }
        }
      })
      /*chart*/
      .state('app.chart', {
        url: '/chart',
        views: {
          'content@': {
            templateUrl: 'views/chart/charts.html'
          }
        }
      })
      .state('app.n3Chart', {
        url: '/n3Charts',
        views: {
          'content@': {
            templateUrl: 'views/chart/n3Charts.html'
          }
        }
      })
      /*table*/
      .state('app.table', {
        url: '/tables',
        views: {
          'content@': {
            templateUrl: 'views/tables/tables.html'
          }
        }
      })
      .state('app.dataTable', {
        url: '/dataTable',
        views: {
          'content@': {
            templateUrl: 'views/tables/dataTables.html'
          }
        }
      })
      .state('app.uiGrid', {
        url: '/uiGrid',
        views: {
          'content@': {
            templateUrl: 'views/tables/uiGrid.html'
          }
        }
      })
      /*form*/
      .state('app.formElements', {
        url: '/formElement',
        views: {
          'content@': {
            templateUrl: 'views/form/formElements.html'
          }
        }
      })
      .state('app.formValidations', {
        url: '/formValidation',
        views: {
          'content@': {
            templateUrl: 'views/form/formValidations.html'
          }
        }
      })
      .state('app.widget', {
        url: '/widget',
        views: {
          'content@': {
            templateUrl: 'views/pages/widget.html'
          }
        }
      })

      .state('app.userList', {
        url: '/userList',
        views: {
          'content@': {
            templateUrl: 'views/pages/userList.html'
          }
        }
      })
      .state('app.userProfile', {
        url: '/userProfile',
        views: {
          'content@': {
            templateUrl: 'views/pages/userProfile.html'
          }
        }
      })
      .state('app.post', {
        url: '/post',
        views: {
          'content@': {
            templateUrl: 'views/pages/post.html'
          }
        }
      })
      .state('app.price', {
        url: '/price',
        views: {
          'content@': {
            templateUrl: 'views/pages/price.html'
          }
        }
      })
      .state('app.invoice', {
        url: '/invoice',
        views: {
          'content@': {
            templateUrl: 'views/pages/invoice.html'
          }
        }
      })
      .state('app.timeLine', {
        url: '/timeLine',
        views: {
          'content@': {
            templateUrl: 'views/pages/timeLine.html'
          }
        }
      })

      .state('app.map', {
        url: '/map',
        views: {
          'content@': {
            templateUrl: 'views/pages/map.html'
          }
        }
      })
      /*email*/
      .state('app.email', {
        url: '/email',
        views: {
          'content@': {
            templateUrl: 'views/email/email.html'
          }
        }
      })
      .state('email', {
        url: '/email',
        views: {
          'header@': {
            templateUrl: 'views/sections/header.html'
          },
          'nav@': {
            templateUrl: 'views/email/emailNav.html'
          },
          'chat@': {
            templateUrl: 'views/sections/chat.html'
          },
          'content@': {
            templateUrl: 'views/email/email.html'
          },
          'footer@': {
            templateUrl: 'views/sections/footer.html'
          }
        }
      })
      .state('sendEmail', {
        url: '/sendEmail',
        views: {
          'header@': {
            templateUrl: 'views/sections/header.html'
          },
          'nav@': {
            templateUrl: 'views/email/emailNav.html'
          },
          'chat@': {
            templateUrl: 'views/sections/chat.html'
          },
          'content@': {
            templateUrl: 'views/email/sendEmail.html'
          },
          'footer@': {
            templateUrl: 'views/sections/footer.html'
          }
        }
      })
      .state('emailContent', {
        url: '/emailContent',
        views: {
          'header@': {
            templateUrl: 'views/sections/header.html'
          },
          'nav@': {
            templateUrl: 'views/email/emailNav.html'
          },
          'chat@': {
            templateUrl: 'views/sections/chat.html'
          },
          'content@': {
            templateUrl: 'views/email/emailContent.html'
          },
          'footer@': {
            templateUrl: 'views/sections/footer.html'
          }
        }
      })
      /*specialPage*/
      .state('signIn', {
        url: '/signIn',
        views: {
          'header@': {
            template: ''
          },
          'nav@': {
            template: ''
          },
          'chat@': {
            template: ''
          },
          'content@': {
            templateUrl: 'views/pages/signIn.html'
          },
          'footer@': {
            template: ''
          }
        }
      })
      .state('signUp', {
        url: '/signUp',
        views: {
          'header@': {
            template: ''
          },
          'nav@': {
            template: ''
          },
          'chat@': {
            template: ''
          },
          'content@': {
            templateUrl: 'views/pages/signUp.html'
          },
          'footer@': {
            template: ''
          }
        }
      })
      .state('lockScreen', {
        url: '/lockScreen',
        views: {
          'header@': {
            template: ''
          },
          'nav@': {
            template: ''
          },
          'chat@': {
            template: ''
          },
          'content@': {
            templateUrl: 'views/pages/lockScreen.html'
          },
          'footer@': {
            template: ''
          }
        }
      })
      .state('404', {
        url: '/404',
        views: {
          'header@': {
            template: ''
          },
          'nav@': {
            template: ''
          },
          'chat@': {
            template: ''
          },
          'content@': {
            templateUrl: 'views/pages/404.html'
          },
          'footer@': {
            template: ''
          }
        }
      })
      .state('505', {
        url: '/505',
        views: {
          'header@': {
            template: ''
          },
          'nav@': {
            template: ''
          },
          'chat@': {
            template: ''
          },
          'content@': {
            templateUrl: 'views/pages/505.html'
          },
          'footer@': {
            template: ''
          }
        }
      })
      .state('error', {
        url: '/error',
        views: {
          'header@': {
            template: ''
          },
          'nav@': {
            template: ''
          },
          'chat@': {
            template: ''
          },
          'content@': {
            templateUrl: 'views/pages/error.html'
          },
          'footer@': {
            template: ''
          }
        }
      })

  });

