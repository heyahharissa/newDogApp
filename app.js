// made an app
var app = angular.module('app', ['firebase']);

// just printing shib out to the page
app.controller('MainCtrl', function ($scope) {
    $scope.name = "Alyssa";
});

// start to firebase
app.controller("FireCtrl", function($scope, $firebaseObject) {
    var ref = new Firebase("https://newdogapp.firebaseio.com");
    // download the data into a local object
    $scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below
});

// This was step 3
// do more steps @ https://www.firebase.com/docs/web/libraries/angular/quickstart.html