angular.module('app.controllers', [])
  
.controller('fileHistoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function($scope, $stateParams){
    
    // //Import the Messaging SDK
    // var flowroute = require('./flowroutemessaginglib');
    // flowroute.configuration.username = "56096114";
    // flowroute.configuration.password = "be54f465a777ba86460207589f439ef3";
        
    // var msg = {"to": "19169908919", "from": "12064205780", "content": "That rug really tied the room together."};
    // flowroute.MessagesController.createMessage(msg, cb);
}

 



// var url = "-https://demo.docusign.net/restapi/v2/accounts/2475394/envelopes";
// var body = JSON.stringify({
// 		"emailSubject": "DocuSign API call - Example",
// 		"templateId": templateId,
// 		"templateRoles": [{
// 			"email": bwonymph@gmail.com,
// 			"name": Kent Makishima,
// 			"roleName": ROLE,
// 			"clientUserId": "1001"	// user-configurable
// 		}],
// 		"status": "sent"
// 	});

// // set request url, method, body, and headers
// var options = initializeRequest(url, "POST", body, email, password);

// // send the request...
// request(options, function(err, res, body) {
// 	if(!parseResponseBody(err, res, body)) {
// 		return;
// 	}
// 	// parse the envelopeId value from the response
// 	envelopeId = JSON.parse(body).envelopeId;
	
// }




// var url = baseUrl + "/envelopes/" + envelopeId + "/views/recipient";
// var method = "POST";
// var body = JSON.stringify({
// 		"returnUrl": "http://www.docusign.com/devcenter",
// 		"authenticationMethod": "email",					
// 		"email": email,					
// 		"userName": recipientName,		
// 		"clientUserId": "1001",	// must match clientUserId in step 2!
// 	});  

// // set request url, method, body, and headers
// var options = initializeRequest(url, "POST", body, email, password);

// // send the request...
// request(options, function(err, res, body) {
// 	if(!parseResponseBody(err, res, body))
// 		return;
// 	else
// 		console.log("\nNavigate to the above URL to start the Embedded Signing workflow...");
// });







])
   
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
   
.controller('chatCtrl', ['$scope', '$stateParams', '$firebaseArray', '$ionicUser', function ($scope, $stateParams, $firebaseArray, $ionicUser) {
    
    $scope.data = {
        'message': ''
    }
    

    
      var ref = firebase.database().ref().child("messages");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.data.message,
          email: $ionicUser.details.email,
          name: $ionicUser.details.name
        });
        $scope.data.message = '';
      };
      
      
      

}])
   
.controller('meowtestCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 