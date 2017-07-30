/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('history', [])

/* Ex.: 
.service('BlankService', [function(){
}]);

*/
app.controller('tap', function($scope, $http) {
    $http.post("welcome.htm").then(function (response) {
        $scope.myWelcome = response.data;
    });
});


