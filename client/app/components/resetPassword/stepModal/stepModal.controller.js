class StepModalController {
	constructor($scope,$ionicModal ){ //inject service in there like that: (UserService)
		this.name = 'stepModal';
		this.$scope = $scope;
		this.$ionicModal = $ionicModal;
	}
	close(){
		this.closeModal();
	};
}

StepModalController.$inject = ['$scope','$ionicModal' ]; //inject service in there like that: ['UserService']
export default StepModalController;