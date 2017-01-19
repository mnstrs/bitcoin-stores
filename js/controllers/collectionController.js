(function () {
	'use strict';

	angular.module('bitstores').controller('CollectionController', CollectionController);

	function CollectionController($scope, HeaderFactory) {
		let vm = this;

		initialize();

		function initialize() {
			vm.query = HeaderFactory.currentQuery;

			firebase.database().ref('stores').orderByChild('visibility').on('value', snap => {
				$scope.$evalAsync(() => {
					let stores = [];
					if (snap) {
						snap.forEach(child => {
							stores.push(child.val());
						});
						vm.stores = stores;
					}
				});
			});
		}


	}
})();
