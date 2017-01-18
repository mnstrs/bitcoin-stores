let bitstores = angular.module('bitstores', ['ui.router']);

bitstores.config(($stateProvider, $urlRouterProvider) => {

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('/', {
		url: '/',
		templateUrl: 'views/collection.html'
	});

});
