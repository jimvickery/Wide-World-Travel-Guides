"use strict";
console.log('inside app.js');

var app = angular.module("GuideApp", ["ngRoute"]);


app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
//    when('/', {
//     templateUrl: 'partials/greetings.html'
// }).
    when('/', {
        templateUrl: 'partials/guide-list.html',
        controller: "BookListCtrl"
    }).
    otherwise('/');
}]);
