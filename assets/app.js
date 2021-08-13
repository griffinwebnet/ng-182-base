var app = angular.module('app', ['ngRoute', 'ngAnimate']);

// ============ Route Providers =============== //
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
          controller: 'appCtrl',
          templateUrl: './routes/authenticated/dashboard.html'
      })
      .when('/login', {
        controller: 'appCtrl',
        templateUrl: './routes/unauthenticated/login.html'
      })
});

app.controller('appCtrl', function ($scope) {
console.log("route loaded");
});
