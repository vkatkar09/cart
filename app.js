var app = angular.module("myApp", ["ngRoute", "ngMaterial", "ngAnimate","ngAria"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/login.html",
        controller: 'loginController',
    })
    .when("/login", {
        templateUrl : "views/login.html",
        controller: 'loginController',
    })
    .when("/home", {
        templateUrl : "views/home.html",
        controller : 'homeController',
    })
    .when("/registration", {
        templateUrl : "views/registration.html",
        controller: "registrationController",
    })
    .when("/cart", {
        templateUrl : "views/cart.html",
        controller: "cartController",
    })
    .when("/history", {
        templateUrl : "views/history.html",
        controller: "historyController",
    });
});