(function () {
	'use strict';

	angular.module('bitstores').controller('HeaderController', HeaderController);

	function HeaderController($scope, HeaderFactory, $interval) {
		let vm = this;

		vm.query = HeaderFactory.currentQuery;
	}
})();
