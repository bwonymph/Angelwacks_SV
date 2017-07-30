angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
    
    $scope.userData = $ionicUser.details;

    $scope.logout = function(){
        $ionicAuth.logout();
        $state.go('menu.login');
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {

    $scope.data = {
        'email': '',
        'password': ''
    }
    
    $scope.error = '';
    
    if ($ionicAuth.isAuthenticated()) {
        // Make sure the user data is going to be loaded
        $ionicUser.load().then(function() {});
        $state.go('menu.profile'); 
    }
    
    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
            $state.go('menu.profile');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}])
   
.controller('meowtestCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    //**
    $scope.mapLink=function(){
        //var RTM = require('..');
    
        var endpoint = '############';
        var appkey = '############';
        
        var client = new RTM(endpoint, appkey);
        //window.open('http://www.google.com','self');
        client.on('enter-connected', function () {
          console.log('Connected to Satori RTM!');
        });
        
        client.on('error', function (error) {
          console.log('Failed to connect', error);
        });
        
        var channel = client.subscribe('output', RTM.SubscriptionMode.SIMPLE);
        
        /* set callback for state transition */
        channel.on('enter-subscribed', function () {
          console.log('Subscribed to: ' + channel.subscriptionId);
          //window.open('http://www.google.com','self');
        });
        
        channel.on('leave-subscribed', function () {
          console.log('Unsubscribed from: ' + channel.subscriptionId);
        });
        
        /* set callback for PDU with specific action */
        channel.on('rtm/subscription/data', function (pdu) {
          pdu.body.messages.forEach(function (msg) {
            console.log('Got animal ' + msg.place_id + ': ' + JSON.stringify(msg)); //change draper uni to iphone GPS 
            window.open("https://www.google.com/maps/dir/?api=1&origin=draper+university&destination=san+francisco&destination_place_id=" + msg.place_id,'_system');
          });
        });
        
        channel.on('rtm/subscribe/error', function (pdu) {
          console.log('Failed to subscribe. RTM replied with the error ' +
              pdu.body.error + ': ' + pdu.body.reason);
        });
        
        channel.on('rtm/subscription/error', function (pdu) {
          console.log('Subscription failed. RTM sent the unsolicited error ' +
              pdu.body.error + ': ' + pdu.body.reason);
        });
        
        client.start();
            
    };

}])
   
.controller('page10Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.input=function(inputx){
        var endpoint = '############';
        var appkey = '############';

        var client = new RTM(endpoint, appkey);

        client.on('enter-connected', function () {
          console.log('Connected to Satori RTM!');

          var channelName = 'emaildoc';
          var message = {
            who: '%s'%inputx,
          };
          client.publish(channelName, message , function (pdu) {
            if (pdu.action === 'rtm/publish/ok') {
              console.log('Publish confirmed');
            } else {
              console.log('Failed to publish. RTM replied with the error ' +
                  pdu.body.error + ': ' + pdu.body.reason);
            }
          });
        });

        client.on('error', function (error) {
          console.log('Failed to connect', error);
        });

        client.start();
    }
}])
 
