(function() {
    var app = angular.module("myApp");

    var homeFunction = function($scope, $mdDialog, $http) {
      $scope.items=[];
      $http.get("http://127.0.0.1:3030/api/releases/notes").then(
      function successCallback(response) {
        $scope.response = response;
        $scope.items = response.data;
      },
      function errorCallback(response) {
        console.log("Unable to perform get request");
      }
    );

      $scope.delete = function(name){
        // var arrayLength = $scope.items.length;
        // for (var i = 0; i < arrayLength; i++) {
        //   if ($scope.items[i].name == name)
        //   {
        //     $scope.items.splice(i,1)
        //   }
        // }
        data={
          "name" : name
        }
        $http.post("http://127.0.0.1:3030/api/releases/remove", data).then(
                function successCallback(response) {
                  console.log("Successfully POST-ed data");
                  //$window.location.href = '/#!/login';
                  $http.get("http://127.0.0.1:3030/api/releases/notes").then(
                    function successCallback(response) {
                      $scope.response = response;
                      $scope.items = response.data;
                    },
                    function errorCallback(response) {
                      console.log("Unable to perform get request");
                    }
                  );
                },
                function errorCallback(response) {
                  console.log("POST-ing of data failed");
                  //$scope.regError=true;
                }
              );
      }

      $scope.addItem=function(ev){  
              // Appending dialog to document.body to cover sidenav in docs app
              var confirm = $mdDialog.prompt()
                .title('What would you name your item?')
                .placeholder('Your item name')
                .targetEvent(ev)
                .required(true)
                .ok('Okay!')
                .cancel('Cancel');
          
                
              $mdDialog.show(confirm).then(function(result) {
                 temp = {"name": result, "description": "description for " + result}
                // $scope.items.push(temp);

                $http.post("http://127.0.0.1:3030/api/releases/notes", temp).then(
                function successCallback(response) {
                  console.log("Successfully POST-ed data");
                  
                $http.get("http://127.0.0.1:3030/api/releases/notes").then(
                  function successCallback(response) {
                    $scope.response = response;
                    $scope.items = response.data;
                  },
                  function errorCallback(response) {
                    console.log("Unable to perform get request");
                  }
                );
                },
                function errorCallback(response) {
                  console.log("POST-ing of data failed");
                  $scope.regError=true;
                }
              );

              }, function() {
                console.log("No item found")
              });
            }; 
  }

    app.controller("homeController", homeFunction);

}());
