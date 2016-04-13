class StepTwoController {
    constructor($scope,$ionicModal, LoginService, $stateParams , $ionicLoading, $ionicPopup) { //inject service in there like that: (UserService)
        this.name = 'stepTwo';
        this.$scope = $scope;
        this.LoginService = LoginService;
        this.$ionicModal = $ionicModal;
        this.modalTwo = null;
        this.$ionicLoading = $ionicLoading;
        this.$ionicPopup = $ionicPopup;
        this.token = $stateParams.token;
        this.tokenIsValid = true;
        this.checkToken(this.token);
        this.closeModalBind = this.closeModal.bind(this);
        this.$scope.$on('$stateChangeStart', () => {
            if (this.modalTwo ) {
                this.modalTwo.remove();
                this.modalTwo = null;
            }
        });
    }
    showAlert(value) {
        var alertPopup = this.$ionicPopup.alert({
            title: value,
            template:  '',
        });
    }
    closeModal() {
        this.modalTwo.hide();
    }
    checkToken(token) {
        this.$ionicLoading.show();
        this.LoginService.checkTokenExpired(token, this.check_token_callback.bind(this));
    }

    check_token_callback(error, result) {
        this.$ionicLoading.hide();
        if (result) {
            this.tokenIsValid = true;
        } else {
            this.tokenIsValid = false;
        }
    }

    resetPassword(newPassword, retypePassword) {

        if(newPassword != retypePassword){
            this.showAlert('Password không trùng nhau!');
        }else{
            this.$ionicLoading.show();
            this.LoginService.resetPassword(this.token, newPassword, (function (err) {
                this.$ionicLoading.hide();
                if (err) {
                    this.showAlert(err.reason);
                } else {
                    console.log('Bạn thành công!');
                    this.modalTwo = this.$ionicModal.fromTemplate('<reset-password-modal-step ' +
                        'data-close-modal="vm.closeModalBind">' +
                        '</reset-password-modal-step>', {
                        scope: this.$scope,
                        animation: 'slide-fade',
                    });
                    this.modalTwo.show();
                }
            }).bind(this));
        }

    }
}

StepTwoController.$inject = ['$scope','$ionicModal', 'LoginService', '$stateParams', '$ionicLoading', '$ionicPopup']; //inject service in there like that: ['UserService']
export default StepTwoController;