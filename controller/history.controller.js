(function() {
    var app = angular.module("myApp");

    var historyFunction = function($scope, groceryService) {
        groceryService.getHistory().then(
            function successCallback(response) {
              console.log("Successfully GOT data");
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
