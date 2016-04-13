class FormEditInfoController {
    constructor(LoginService, GeneralService, $interval, $reactive, $scope, ImgInput, $ionicLoading, $ionicPopup) { //inject service in there like that: (UserService)
        this.name = 'formEditInfo';
        this.$interval = $interval;
        this.fileData = null;
        this.GeneralService = GeneralService;
        this.LoginService = LoginService;
        this.ImgInput = ImgInput;
        this.$ionicLoading = $ionicLoading;
        this.$ionicPopup = $ionicPopup;
        this.$scope = $scope;
        this.save_bind_callback = this.save_callback.bind(this);
        this.addReactive($reactive, $scope);
        this.currentUser = null;
    }

    getFile() {
        this.progress = 0;
        this.ImgInput.readAsDataUrl(this.file, this.$scope)
            .then((function (result) {
                this.$ionicLoading.show();
                this.fileData = result; //TODO: 503 error Service Unavailabe if remove this line
                this.GeneralService.userUploadProfileImage(result, this.save_bind_callback);
            }).bind(this));
    }

    addReactive($reactive, $scope) {
        $reactive(this).attach($scope);
        this.helpers({
            isLoggedIn: () => {
                return Meteor.userId() !== null;
            },
            information_user: () => {
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

    avatar_save(fileData) {
        this.$ionicLoading.show();
        this.GeneralService.userUploadProfileImage(fileData, this.save_bind_callback);
    }

    avatar_cancel() {
        delete this.fileData;
    }

    profile_save(publicProfile, privateProfile) {
        this.$ionicLoading.show();
        var profileData = {
            publicProfile: {
                name: publicProfile.name,
                birthday: publicProfile.birthday,
                gender: publicProfile.gender
            },
            privateProfile: {
                phoneNumber: privateProfile.phoneNumber,
                address: privateProfile.address,
            }
        };
        this.GeneralService.userChangeProfile(profileData, this.save_bind_callback);
    }

    profile_cancel() {
        this.helpers({
            information_user: () => {
                return Meteor.user();
            }
        });
    }

    showAlert(value) {
        var alertPopup = this.$ionicPopup.alert({
            title: value,
            template: '',
        });
    }

    password_save(oldPassword, newPassword) {
        var passwordData = this.passwordData;
        if (newPassword == null) {
            this.showAlert('Bạn chưa nhập mật khẩu mới.');
        } else if (passwordData.newPassword != passwordData.rePassword) {
            this.showAlert('Mật khẩu xác nhận nhập sai!');
        } else {
            this.$ionicLoading.show();
            this.LoginService.changePassword(oldPassword, newPassword, this.save_bind_callback);
        }
    }

    password_cancel() {
        delete this.passwordData.oldPassword;
        delete this.passwordData.newPassword;
    }

    save_callback(error, response) {
        this.$ionicLoading.hide();
        if (error) {
            this.showAlert(error.message);
            delete this.fileData
        } else {
            this.showAlert('Lưu thành công');
            console.log('response:', response);
        }
    }
}

FormEditInfoController
    .$inject = ['LoginService', 'GeneralService', '$interval', '$reactive', '$scope', 'ImgInput', '$ionicLoading', '$ionicPopup']; //inject service in there like that: ['UserService']
export
default
FormEditInfoController;