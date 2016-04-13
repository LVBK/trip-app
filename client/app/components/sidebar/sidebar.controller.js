class SidebarController {
    constructor($state, GeneralService, $reactive, $scope, LoginService, $ionicPopup) { //inject service in there like that: (UserService)
        this.name = 'sidebar';
        this.LoginService = LoginService;
        this.GeneralService = GeneralService;
        this.$ionicPopup = $ionicPopup;
        this.$state = $state;
        this.setting_box = false;
        this.addReactive($reactive, $scope);
    }
    showAlert(value) {
        var alertPopup = this.$ionicPopup.alert({
            title: value,
            template:  '',
        });
    }
    addReactive($reactive, $scope) {
        $reactive(this).attach($scope);
        this.helpers({
            isLoggedIn: () => {
                return Meteor.userId() !== null;
            },
            currentUser: () => {
                return Meteor.user();
            },
            avatarUrl: () => {
                if (Meteor.user() && Meteor.user().publicProfile) {
                    return this.GeneralService.getThumbnailUrl(Meteor.user().publicProfile.avatar);
                } else {
                    return this.GeneralService.getThumbnailUrl();
                }
            }
        });
    }

    logout() {
        this.LoginService.logOut((function (err) {
            if (err) {
                this.showAlert(err.reason);
            } else {
                console.log("LOGout SUCCESS");
                this.$state.go('app.home');
                this.setting_box = false;
            }
        }).bind(this));
    }
}

SidebarController.$inject = ['$state', 'GeneralService', '$reactive', '$scope', 'LoginService', '$ionicPopup']; //inject service in there like that: ['UserService']
export default SidebarController;