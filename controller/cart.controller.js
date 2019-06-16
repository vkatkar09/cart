(function () {
  var app = angular.module("myApp");

  var cartFunction = function ($scope, $window, $http, $mdDialog) {
    $scope.productName = ['Salt', 'Sugar', 'Rice', 'Milk', 'Butter']
    $scope.selectedProduct = "Salt";
    $scope.productQty = 0;
    $scope.productPrice = 0;


    $scope.cart = [];
    $scope.history = [];


    var findItemById = function (items, id) {
      //finds item in the array by ID
      return _.find(items, function (item) {
        return item.id === id;
      });
    };

    $scope.getCost = function (item) {
      return item.quantity * item.price;
    };

    $scope.addItem = function (itemToAdd) {
      var item = { "name": $scope.selectedProduct, "quantity": $scope.productQty, "price": $scope.productPrice, "total_price": $scope.productQty * $scope.productPrice }
      $scope.cart.push(item);

    };

    $scope.getTotal = function () {
      //loops over all the items and calculate the sum
      var total = _.reduce($scope.cart, function (sum, item) {
        return sum + $scope.getCost(item);
      }, 0);
      return total;
    };

    $scope.clearCart = function () {
      $scope.cart.length = 0;
    };

    $scope.checkout = function (ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title(' Would you like to add this?')
        .textContent('This gets saved locally!.')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Please do it!')
        .cancel('No I changed my mind');

      $mdDialog.show(confirm).then(function () {
        //var data =  {$scope.history.length+'': $scope.cart}
        $http.post("http://127.0.0.1:3030/api/releases/save", $scope.cart).then(
          function successCallback(response) {
            console.log("Successfully POST-ed data");
            $scope.clearCart()
            //$window.location.href = '/#!/login';
          },
          function errorCallback(response) {
            console.log("POST-ing of data failed");
            //$scope.regError=true;
          }
        );
      }, function () {
        $scope.status = 'You decided to keep your debt.';
      });
    };

    saveData = function(data){
      console.log(data);
     
    }

    $scope.removeItem = function (item) {
      var index = $scope.cart.indexOf(item);
      $scope.cart.splice(index, 1);
    };

  }

  app.controller("cartController", cartFunction);

}());
