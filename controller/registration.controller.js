(function() {
    var app = angular.module("myApp");

    var registrationFunction = function($scope, $window, groceryService) {
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

            
            groceryService.register(data).then(
                function (response) {
                  console.log("Successfully POST-ed data");
                  $window.location.href = '/#!/login';
                },
                function (response) {
                  console.log("POST-ing of data failed");
                  $scope.regError=true;
                }
              );
           }
           
        }        
     
    }

    app.controller("registrationController", registrationFunction);

}());
