(function() {
    var app = angular.module("myApp");

    var registrationFunction = function($scope, $window, $http) {
        $scope.regError=false;
        
        $scope.register = function(){
            //console.log($scope.lastName)
            if($scope.firstName == undefined || 
               $scope.lastName==undefined ||
               $scope.userName==undefined ||
               $scope.password==undefined ||
               $scope.confirmPassword==undefined ||
               $scope.email==undefined ||
               $scope.contactNo== undefined
               )
          {
            

            $scope.regError=true;
           } 
           else{
               console.log("else1");
               data ={
                "username":$scope.userName,
                "password": $scope.password,
                "email":$scope.email,
                "contact": $scope.contactNo
            }

            
            $http.post("http://127.0.0.1:3030/api/releases/register", data).then(
                function successCallback(response) {
                  console.log("Successfully POST-ed data");
                  $window.location.href = '/#!/login';
                },
                function errorCallback(response) {
                  console.log("POST-ing of data failed");
                  $scope.regError=true;
                }
              );
           }
           
        }        
     
    }

    app.controller("registrationController", registrationFunction);

}());
