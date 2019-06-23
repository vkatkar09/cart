(function () {
  var app = angular.module("myApp");

  var loginFunction = function ($scope, $window, groceryService) {
    $scope.loginError = false;
    $scope.formSubmit = function () {
      data = {
        "username": $scope.username,
        "password": $scope.password
      }

      groceryService.loginAPI(data).then(function (response) {
        console.log("Successfully POST-ed data");
        console.log(response.data.sucess)
        if (response.data.sucess == true) {
          $window.location.href = '/#!/home';
        }
        else {
          $scope.loginError = true;
        }
      }, function (err) { 
        console.log(err)
      })      
    }

  }

  app.controller("loginController", loginFunction);

}());
