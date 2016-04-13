class FullController {
    constructor($state, $ionicHistory, SearchService, $scope) { //inject service in there like that: (UserService)
        this.name = 'full';
        this.$state = $state;
        this.$scope = $scope;
        this.changeShowState(false);
        this.SearchService = SearchService;

        this.$ionicHistory = $ionicHistory;
    };

    changeShowState(newState) {
        this.isShowSearch = newState;
        this.$scope.$broadcast('search_bar');
    }

    clickIcon() {
        this.changeShowState(!this.isShowSearch);
        console.log('search-bar', this.isShowSearch);        
    }

    myGoBack() {
        this.$ionicHistory.goBack();
    }


    enterType() {
        var keyWord = this.keyWord;
        if (keyWord.length > 0) {
            this.SearchService.setSearchKey(keyWord);
            console.log(keyWord);
            this.$state.go('app.search');
            this.keyWord='';
        }
        this.changeShowState(false);
    }
}

FullController.$inject = ['$state', '$ionicHistory', 'SearchService', '$scope']; //inject service in there like that: ['UserService']
export default FullController;