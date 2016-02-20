
angular.module('slushie', [
  'ngRoute',
  'slushie.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/slushie/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
