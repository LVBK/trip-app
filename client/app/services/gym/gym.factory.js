let gymServiceFactory = function ($meteor, $reactive, GeneralService) {//inject service in there like that: (UserService)


    let initBestSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_best_gym', function () {
            return [
                {
                    sort: context.getReactively('sort'),
                    limit: parseInt(context.getReactively('limit'))
                }
            ]
        }, {
            onReady: function () {
                console.log("onReady And the Items actually Arrive");
            },
            onStop: function (error) {
                if (error) {
                    console.log('An error happened - ', error);
                } else {
                    console.log('The subscription stopped');
                }
            }
        });
        var config = {
            data: function () {
                if(context.getReactively('limit') > 0){
                    return Gym_info.find({isComingSoon: false}, {
                        limit: parseInt(context.limit),
                        sort: {rate: -1, total_rate_user: -1, _id: 1}
                    }).fetch();
                }
            },
            rowCount: function () {
                return Counts.get('user_get_best_gym');
            },
        };
        reactiveContext.helpers(config);
    };
    let initTrendingSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_trending_gym', function () {
            return [
                {
                    sort: context.getReactively('sort'),
                    limit: parseInt(context.getReactively('limit'))
                }
            ]
        }, {
            onReady: function () {
                console.log("onReady And the Items actually Arrive");
            },
            onStop: function (error) {
                if (error) {
                    console.log('An error happened - ', error);
                } else {
                    console.log('The subscription stopped');
                }
            }
        });
        var config = {
            data: function () {
                if(context.getReactively('limit') > 0) {
                    return Gym_info.find({isComingSoon: false}, {
                        limit: parseInt(context.limit),
                        sort: {total_workout: -1, _id: 1}
                    }).fetch();
                }
            },
            rowCount: function () {
                return Counts.get('user_get_trending_gym');
            },
        };
        reactiveContext.helpers(config);
    };
    let initFlashDealSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_flash_deal_gym', function () {
            return [
                {
                    sort: context.getReactively('sort'),
                    limit: parseInt(context.getReactively('limit'))
                }
            ]
        }, {
            onReady: function () {
                console.log("onReady And the Items actually Arrive");
            },
            onStop: function (error) {
                if (error) {
                    console.log('An error happened - ', error);
                } else {
                    console.log('The subscription stopped');
                }
            }
        });
        var config = {
            data: function () {
                if(context.getReactively('limit') > 0){
                    return Gym_info.find({$and:[{flash_deal: true},{isComingSoon: false}]}, {
                        limit: parseInt(context.limit),
                        sort: {'profile.flash_deal_price': 1, _id: 1}
                    }).fetch();
                }
            },
            rowCount: function () {
                return Counts.get('user_get_flash_deal_gym');
            },
        };
        reactiveContext.helpers(config);
    };
    let gymDetailSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_gym_detail', function () {
            return [
                context.gymId,
                context.getReactively('limit')
            ];
        }, {
            onReady: function () {
                console.log("onReady xxx");
            },
            onStop: function (error) {
                if (error) {
                    console.log('An error happened xxx - ', error);
                } else {
                    console.log('The subscription stopped xxxx');
                }
            }
        });
        var config = {
            data: function () {
                return Gym_info.findOne({_id: context.gymId});
            },
            commentData: function () {
                return Review.find({gym_id: context.gymId});
            }
        };
        reactiveContext.helpers(config);
    };

    let getConvenientList = function () {
        return {
            "towel": "Khăn tắm",
            "hot-water": "Nước nóng",
            "steam": "Xông hơi",
            "shell": "Tủ cá nhân",
            "jacuzzi": "Jacuzzi"
        };
    };
    let getServiceList = function () {
        return {
            "gym": "Gym",
            "pt": "P.T",
            "spa": "Spa",
            "children": "Sân chơi trẻ em",
            "cycling": "Đạp xe",
            "swimming": "Bể bơi",
            "yoga": "Yoga",
            "group": "Group X"
        };
    };


    let searchGymSubscrise = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_search_gym', function () {
            return [
                context.getReactively('selector'),
                {
                    sort: context.getReactively('sort'),
                    limit: parseInt(context.getReactively('limit'))
                }
            ]
        }, {
            onReady: function () {
                console.log("onReady And the Items actually Arrive");
            },
            onStop: function (error) {
                if (error) {
                    console.log('An error happened - ', error);
                } else {
                    console.log('The subscription stopped');
                }
            }
        });
        var config = {
            searchData: function () {
                return Gym_info.find(context.getReactively('selector'), {
                    sort: context.getReactively('sort'),
                    limit: parseInt(context.getReactively('limit'))
                }).fetch();
            },
            rowCount: function () {
                return Counts.get('user_search_gym');
            },
        };
        reactiveContext.helpers(config);
    };
    return {
        initBestSubscribe,
        initTrendingSubscribe,
        initFlashDealSubscribe,
        gymDetailSubscribe,
        getServiceList,
        getConvenientList,
        searchGymSubscrise,
    };
};

gymServiceFactory.$inject = ['$meteor', '$reactive', 'GeneralService']; //inject service in there like that: ['UserService']
export default gymServiceFactory; 