class InfoController {
    constructor($state,$scope, $reactive, $stateParams, GeneralService) { //inject service in there like that: (UserService)
        this.name = 'info';
        this.userInfo = GeneralService.getUserInfo();
        this.$state = $state;
        this.$scope = $scope;
        this.addReactive($reactive, $scope);
    }
    addReactive($reactive, $scope) {
        $reactive(this).attach($scope);
        this.helpers({
            isLoggedIn: () => {
                return Meteor.userId() !== null;
            },
            currentUser: () => {
                return Meteor.user();
            }
        });
    }
}

InfoController.$inject = ['$state','$scope','$reactive', '$stateParams', 'GeneralService']; //inject service in there like that: ['UserService']
export default InfoController;