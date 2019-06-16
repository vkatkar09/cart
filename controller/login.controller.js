(function() {
    var app = angular.module("myApp");

    var loginFunction = function($scope, $window, $http) {
        $scope.loginError=false;
        $scope.formSubmit = function(){
           data ={
               "username": $scope.username,
               "password": $scope.password
           }
            $http.post("http://127.0.0.1:3030/api/releases/login", data).then(
                function successCallback(response) {
                  console.log("Successfully POST-ed data");
                  console.log(response.data.sucess)
                  if(response.data.sucess== true){
                    $window.location.href = '/#!/home';
                  }else{
                      $scope.loginError=true;
                  }
                  
                },
                function errorCallback(response) {
                  console.log("POST-ing of data failed");
                  console.log(response.data.sucess)
                  $scope.loginError=true;
                }
              );
        }        
    
    }

    app.controller("loginController", loginFunction);

}());
