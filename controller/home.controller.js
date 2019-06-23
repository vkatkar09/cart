(function() {
    var app = angular.module("myApp");

    var homeFunction = function($scope, $mdDialog, groceryService, $http) {
      $scope.items=[];
     var getNotes = function(){
      groceryService.getNotes().then(
        function successCallback(response) {
          $scope.response = response;
          $scope.items = response.data;
        },
        function errorCallback(response) {
          console.log("Unable to perform get request");
        }
      );
     } 
    getNotes();

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
        groceryService.deleteNotes(data).then(
                function successCallback(response) {
                  console.log("Successfully POST-ed data");
                  //$window.location.href = '/#!/login';
                  getNotes();
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

                groceryService.postNotes(temp).then(
                function successCallback(response) {
                  console.log("Successfully POST-ed data");
                  
                getNotes();
                
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
