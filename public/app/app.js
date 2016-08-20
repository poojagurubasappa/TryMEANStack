var myApp = angular.module('app', ['ngResource', 'ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);
	//$locationProvider.html5Mode('requireBase': false);
	$routeProvider
	.when('/', {templateUrl: '/partials/loggedin'})
	.when('/login', {templateUrl: '/partials/login'})
	.when('/register', {templateUrl: '/partials/register'})
	

});