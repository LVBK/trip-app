class SearchController {
	constructor($scope, SearchService, $interval){ //inject service in there like that: (UserService)
		this.name = 'search';
		this.$scope = $scope;
		this.search_title = 'Search';
		this.searchData = SearchService.getSearchKey();
		this.setSearchTitle();
	}
	setSearchTitle() {
		this.$scope.$watch('vm.searchData.keyword', (newValue, oldValue)=> {
			if (newValue.length > 0) {
				this.search_title = newValue;
				console.log('search_name :',newValue ,   newValue.length );
			}else {
				this.search_title = 'Search';
			}
		});
	}

}

SearchController.$inject = ['$scope','SearchService', '$interval']; //inject service in there like that: ['UserService']
export default SearchController;