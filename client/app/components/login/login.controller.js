class LoginController {
    constructor(LoginService, $state, $ionicHistory, $q, $cordovaFacebook, $ionicLoading,$ionicPopup) { //inject service in there like that: (UserService)
        this.$state = $state;
        this.name = 'login';
        this.LoginService = LoginService;
        this.$ionicHistory = $ionicHistory;
        this.$ionicLoading = $ionicLoading;
        this.$cordovaFacebook = $cordovaFacebook;
        this.$q = $q;
        this.$ionicPopup = $ionicPopup;
        if (Meteor.userId()) {//already logined
            this.$state.go('app.home');
        }
        //this.ionicToast.show('This is a toast at the top.', 'top', true, 25000);
    }
    showAlert(value) {
        var alertPopup = this.$ionicPopup.alert({
            title: value,
            template:  '',
        });
    }
    login() {
        this.$ionicLoading.show();
        //this.ionicToast.show(message, position, stick, time);
        this.LoginService.signIn(this.user.email, this.user.password, ((err) => {
            this.$ionicLoading.hide();
            if (err) {
                this.showAlert(err.reason);
            } else {
                console.log("LOGIN SUCCESS");
                this.login_success();
            }
        }));
    }

    login_success(){
        this.$ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });
        if (this.$ionicHistory.viewHistory().backView) {
            this.$ionicHistory.goBack();
        } else {
            this.$state.go('app.home');
        }
    }

    fbLoginSuccess(response) {
        console.log("fbLoginSuccess", response);
        if (!response.authResponse) {
            this.fbLoginError("Cannot find the authResponse");
            return;
        }

        var authResponse = response.authResponse;

        this.fbUserLoginToSystem(authResponse);
    };

    fbLoginError(error) {
        console.log('fbLoginError', error);
        this.$ionicLoading.hide();
    };

    fbUserLoginToSystem(authResponse) {
        this.authResponse = authResponse;
        this.LoginService.facebookLogin(this.authResponse.accessToken, (error, result)=> {
            console.log("Meteor login FB", error, result);
        });
        this.$ionicLoading.hide();
        this.login_success();
    };

    //This method is executed when the user press the "Login with facebook" button
    facebookSignIn() {
        this.$cordovaFacebook.getLoginStatus()
            .then((success) => {
                if (success.status === 'connected') {
                    this.fbUserLoginToSystem(success.authResponse);
                } else {
                    console.log('getLoginStatus', success.status);
                    this.$ionicLoading.show();
                    // Ask the permissions you need. You can learn more about
                    // FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
                    this.$cordovaFacebook.login(["public_profile", "email", 'user_birthday'])
                        .then(
                            this.fbLoginSuccess.bind(this),
                            this.fbLoginError.bind(this)
                        );
                }
            }, (error) => {
                this.showAlert(error);
            });
    };
}

LoginController.$inject = ['LoginService', '$state', '$ionicHistory', '$q', '$cordovaFacebook', '$ionicLoading', '$ionicPopup']; //inject service in there like that: ['FbUserService']
export default LoginController;