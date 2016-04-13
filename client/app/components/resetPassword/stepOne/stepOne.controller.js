class StepOneController {
	constructor($scope, $ionicModal, LoginService, $ionicLoading, $ionicPopup) { //inject service in there like that: (UserService)
		this.name = 'stepOne';
		this.$ionicLoading = $ionicLoading;
		this.LoginService = LoginService;
		this.$scope = $scope;
		this.$ionicModal = $ionicModal;
		this.$ionicLoading = $ionicLoading;
		this.$ionicPopup = $ionicPopup;
		this.modal = null;
		this.closeModalBind = this.closeModal.bind(this);
		this.$scope.$on('$stateChangeStart', () => {
			if (this.modal ) {
				this.modal.remove();
				this.modal = null;
			}
		});
	}
	closeModal() {
		this.modal.hide();
	}
	showAlert(value) {
		var alertPopup = this.$ionicPopup.alert({
			title: value,
			template:  '',
		});
	}
	confirm_password(useremail) {
		this.$ionicLoading.show();
		this.LoginService.forgotPassword( useremail, (function (err) {
			this.$ionicLoading.hide();
			if (err) {
				this.showAlert(err.reason);
			} else {
				this.modal = this.$ionicModal.fromTemplate('<reset-password-step-modal ' +
						'data-close-modal="vm.closeModalBind"/>', {
					scope: this.$scope,
					animation: 'slide-fade',
				});
				this.modal.show();
			}
		}).bind(this));
	}
}

StepOneController.$inject = ['$scope','$ionicModal','LoginService', '$ionicLoading', '$ionicPopup']; //inject service in there like that: ['UserService']
export default StepOneController;