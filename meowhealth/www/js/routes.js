angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

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

  .state('menu.meowtest', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/meowtest.html',
        controller: 'meowtestCtrl'
      }
    }
  })

  .state('menu.page10', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')


});