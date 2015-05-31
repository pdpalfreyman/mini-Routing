var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/settings', {
			templateUrl: 'settings/settingsTmpl.html',
			controller: 'settingsCtrl'
		})
		.when('/products/:id', {
			templateUrl: 'products/productsTmpl.html',
			controller: 'productsCtrl'
		})
		.otherwise({
	      redirectTo: '/'
	    })

});