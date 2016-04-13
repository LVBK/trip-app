let searchServiceFactory = function () {//inject service in there like that: (UserService)
    var searchData = {
        'keyword': '',
    };
    let setSearchKey = function (keyWord) {
        searchData.keyword = keyWord;
    };
    let getSearchKey = function () {
        return searchData;
    };
    return {
        getSearchKey,
        setSearchKey
    };
};

searchServiceFactory.$inject = []; //inject service in there like that: ['UserService']
export default searchServiceFactory;