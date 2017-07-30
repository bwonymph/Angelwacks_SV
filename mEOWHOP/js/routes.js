angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('fileHistory', {
    url: '/page2',
    templateUrl: 'templates/fileHistory.html',
    controller: 'fileHistoryCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.chat', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('menu.meowtest', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meowtest.html',
        controller: 'meowtestCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')


});