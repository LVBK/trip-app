class ModalStepController {
	constructor($scope,$ionicModal){ //inject service in there like that: (UserService)
		this.name = 'modalStep';
		this.$scope = $scope;
		this.$ionicModal = $ionicModal;
	}
	close(){
		this.closeModal();
	};
}

ModalStepController.$inject = ['$scope','$ionicModal']; //inject service in there like that: ['UserService']
export default ModalStepController;