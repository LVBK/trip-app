class FormInfoController {
    constructor(GeneralService, $reactive, $scope) { //inject service in there like that: (UserService)
        $reactive(this).attach($scope);
        this.name = 'formInfo';
        this.GeneralService = GeneralService;

        this.helpers({
            information_user: () => {
                return Meteor.user();
            },
            avatarUrl: () => {
                if (Meteor.user() && Meteor.user().publicProfile) {
                    return GeneralService.getThumbnailUrl(Meteor.user().publicProfile.avatar);
                } else {
                    return GeneralService.getThumbnailUrl();
                }
            }
        });
    }
}

FormInfoController.$inject = ['GeneralService', '$reactive', '$scope']; //inject service in there like that: ['UserService']
export default FormInfoController;