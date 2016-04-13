let generalServiceFactory = function ($meteor, $rootScope) {//inject service in there like that: (UserService)

    let getUserInfo = function () {
        return $rootScope.currentUser;
    }

    let checkEmailExist = function (email, callback) {
        $meteor.call('checkEmailExist', email).then(function (result) {
            callback(false, result);
        }, function (err) {
            callback(err);
        });
    };
    let getPubSelector = function (searchFields) {
        console.log("Get Selector", searchFields);
        if (!searchFields || searchFields.length === 0) {
            return {};
        }
        var searchCaseInsensitive = true;
        var searches = [];
        _.each(searchFields, function (field) {
            // Split and OR by whitespace
            field.searchString = field.searchString.trim();
            console.log(field.searchString);
            if (field.searchString !== "") {
                var m1 = {}, m2 = {};
                field.data = field.data.replace(/\[\w+\]/, "");
                // String search
                m1[field.data] = {$regex: field.searchString, $options: "i"};
                searches.push(m1);
                var numSearchString = Number(field);
                // Number search
                if (!isNaN(numSearchString)) {
                    m2[field] = numSearchString;
                    searches.push(m2);
                }
            }
        });
        console.log(searches);
        if (typeof searches !== 'undefined' && searches.length > 0)
            return _.extend({}, {$and: searches});
        return {};
    };
    let getServiceSelector = function (searchFields) {
        console.log("Get Selector", searchFields);
        if (!searchFields || searchFields.length === 0) {
            return {};
        }
        var searchCaseInsensitive = true;
        var searches = [];
        _.each(searchFields, function (field) {
            // Split and OR by whitespace
            if (field.searchValue) {
                var m1 = {}, m2 = {};
                field.data = field.data.replace(/\[\w+\]/, "");
                // String search
                m1[field.data] = field.searchValue;
                searches.push(m1);
                var numSearchString = Number(field);
                // Number search
                if (!isNaN(numSearchString)) {
                    m2[field] = numSearchString;
                    searches.push(m2);
                }
            }
        });
        console.log(searches);
        if (typeof searches !== 'undefined' && searches.length > 0)
            return _.extend({}, {$and: searches});
        return {};
    };
    function isUrl(string) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(string);
    }
    let getImageUrl = function (imageId) {
        if (!imageId) {
            return "images/logo.png";
        }
        if(isUrl(imageId)){
            return imageId;
        }
        return __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL + "/cfs/files/images/" + imageId;
    };
    let getThumbnailUrl = function (imageId) {
        if (!imageId) {
            return "images/logo.png";
        }
        if(isUrl(imageId)){
            return imageId;
        }
        return __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL + "/cfs/files/images/" + imageId + "?store=thumbnail";
    };

    let userUploadProfileImage = function (file, callback) {
        $meteor.call("userUploadProfileImage", file).then(function (result) {
            callback(false, result);
        }, function (err) {
            callback(err);
        })
    };
    let userChangeProfile = function (profile, callback) {
        $meteor.call("userChangeProfile", profile).then(function (result) {
            callback(false, result);
        }, function (err) {
            callback(err);
        })
    };
    return {
        checkEmailExist,
        getPubSelector,
        getServiceSelector,
        getUserInfo,
        getImageUrl,
        getThumbnailUrl,
        userUploadProfileImage,
        userChangeProfile
    };
};

generalServiceFactory.$inject = ['$meteor', '$rootScope']; //inject service in there like that: ['UserService']
export default generalServiceFactory; 