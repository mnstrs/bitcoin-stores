(function () {
	'use strict';

	angular.module('bitstores').factory('HeaderFactory', HeaderFactory);

	function HeaderFactory() {

		let currentQuery = {};

		return {
			currentQuery
		};

		function getCurrentQuery() {
			return currentQuery;
		}
	}
})();
