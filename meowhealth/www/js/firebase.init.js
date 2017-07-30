angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBG20RMcxwduBc9EJ52QNLGohDQWY8Y8H8",
    authDomain: "mestate-180a0.firebaseapp.com",
    databaseURL: "https://mestate-180a0.firebaseio.com",
    storageBucket: "mestate-180a0.appspot.com",
  };
  firebase.initializeApp(config);

})


/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/