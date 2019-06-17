(function() {
    var app = angular.module("myApp");

    var historyFunction = function($scope, $window, $http) {
        $http.get("http://127.0.0.1:3030/api/releases/save").then(
            function successCallback(response) {
              console.log("Successfully GOT data");
              console.log(response.data);
             $scope.history = response.data
            },
            function errorCallback(response) {
              console.log("POST-ing of data failed");
              console.log(response.data.sucess)
            }
          );
        
    }

    app.controller("historyController", historyFunction);

}());
