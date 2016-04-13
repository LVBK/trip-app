class SignupController {
	constructor(LoginService, $state, $ionicPopup){ //inject service in there like that: (UserService)
		this.name = 'signup';
		this.LoginService = LoginService;
		this.$state = $state;
		this.$ionicPopup = $ionicPopup;
		this.user = {
			email: '', //Need,
			password: '',	//need
			retypePassword: '',
			publicProfile: {
				name: '',
				gender: "Male",
				birthday: '',
			}
		}
	}
	showAlert(value) {
		var alertPopup = this.$ionicPopup.alert({
			title: value,
			template:  '',
		});
	}
	signUp(){
		var user = this.user;
		this.showLoading = true;
		if(user.password!=user.retypePassword){
			this.showAlert('Mật khẩu xác nhận nhập sai!');
		}else {
			this.LoginService.signUp(this.user, (function (err) {
				this.showLoading = false;
				if (err) {
					this.showAlert(err.reason);
				} else {
					//console.log("Register SUCCESS");
					this.$state.go('app.home');
				}
			}).bind(this));
		}
	}
}

SignupController.$inject = ['LoginService', '$state', '$ionicPopup']; //inject service in there like that: ['UserService']
export default SignupController;