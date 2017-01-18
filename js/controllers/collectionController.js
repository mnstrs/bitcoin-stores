(function () {
	'use strict';

	angular.module('bitstores').controller('CollectionController', CollectionController);

	function CollectionController($scope, $stateParams, $state) {
		let vm = this;

		initialize();

		function initialize() {
			firebase.database().ref('stores').orderByChild('visibility').on('value', snap => {
				$scope.$evalAsync(() => {
					let stores = snap.val();
					if (stores) {
						vm.stores = stores;
						console.log(vm.stores);
					}
				});
			});
		}


	}
})();
