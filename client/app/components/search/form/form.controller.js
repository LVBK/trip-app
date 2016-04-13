class FormController {
    constructor($scope, GymService, GeneralService, $ionicScrollDelegate, $ionicLoading, SearchService, $interval) { //inject service in there like that: (UserService)
        this.name = 'form';
        this.$scope = $scope;
        this.$ionicLoading = $ionicLoading;
        this.GymService = GymService;
        this.GeneralService = GeneralService;
        this.$ionicScrollDelegate = $ionicScrollDelegate;
        this.convenientList = GymService.getConvenientList();
        this.serviceList = GymService.getServiceList();
        this.nameString = '';
        this.addressString = '';
        console.log('[DEBUG] ', this.serviceList);

        this.addressFields = [
            {data: "profile.address", searchString: ""},
        ];
        this.nameFields = [
            {data: "profile.name", searchString: ""},
        ];
        this.servicesFields = [];

        this.convenientFields = [];

        this.searchResutlData = {
            searchData: [],//Data hien thi ra view
            limit: 5,
            sort: {			//Sap xep theo gi (1 tang dan, -1 gian dan)
                _id: 1
            },
            selector: {},
            rowCount: 0,
        };
        for (var item in this.serviceList){
            var path = 'profile.services.'+ item;
            this.servicesFields.push({data: path, searchValue: true});
        }
        for (var item in this.convenientList){
            var path = 'profile.accompanied_services.'+ item;
            this.convenientFields.push({data: path, searchValue: true});
        }
        GymService.searchGymSubscrise(this.searchResutlData, this.$scope);

        this.searchData = SearchService.getSearchKey();
        this.setSearchSelector();

    }

    setSearchSelector() {
        this.$scope.$watch('vm.searchData.keyword', (newValue, oldValue)=> {
            this.nameFields[0].searchString = newValue;
            this.addressFields[0].searchString = newValue;
            this.nameString = this.GeneralService.getPubSelector(this.nameFields);
            this.addressString = this.GeneralService.getPubSelector(this.addressFields);
            this.searchResutlData.selector = {$or: [this.nameString, this.addressString]};
            console.log('test:', newValue);
        });
    }
    gymSearch(value) {
        this.searchResutlData.selector = value;
    }

    advancedSearch() {
        var servicesSelector = this.GeneralService.getServiceSelector(this.servicesFields);
        var convenientSelector = this.GeneralService.getServiceSelector(this.convenientFields);
        this.searchResutlData.selector = {$and: [servicesSelector, convenientSelector,this.nameString, this.addressString ]};
        console.log('servicesSelector', this.servicesFields);
    };

    getMore() {
        this.$scope.$broadcast('scroll.infiniteScrollComplete');
        console.log('countData:', this.searchResutlData.rowCount);
        this.$scope.$watch('vm.searchResutlData.rowCount', (newValue, oldValue)=> {
            if(this.searchResutlData.rowCount >= this.searchResutlData.limit ){
                this.searchResutlData.limit += 5;
            }else {
                this.noMoreItemAvailable = true;
            }
            //console.log(newValue, this.pagingData.limit);
        });
    }
}

FormController.$inject = ['$scope', 'GymService', 'GeneralService', '$ionicScrollDelegate', '$ionicLoading','SearchService', '$interval']; //inject service in there like that: ['UserService']
export default FormController;