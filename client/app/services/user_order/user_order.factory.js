let user_orderServiceFactory = function ($meteor, $reactive) {//inject service in there like that: (UserService)

    let initSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_order', function () {
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
            orderData: function () {
                return User_order.find({}, {
                                sort: context.getReactively('sort'),
                                limit: parseInt(context.getReactively('limit'))
                            }).fetch();
            },
            gymData: function () {
                return Gym_info.find({});
            },
            rowCount: function () {
                return Counts.get('user_get_order' + Meteor.userId());
            },
        };
        reactiveContext.helpers(config);
    };
    let numberOrder = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_order_count', function () {
            return [
                context.getReactively('selector'),
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
            orderCount: function () {
                return Counts.get('user_get_current_order_count' + Meteor.userId());//numberOfUsers la gi hoi thang lam server.
            },
        };
        reactiveContext.helpers(config);
    };

    let userBuyGymSet = function (gymId, callback) {
        Meteor.call('userBuyGymSet', gymId, callback);
    };
    let detailSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_order_detail', function () {
            return [
                context.getReactively('orderId')
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
            orderDetailData: function () {
                return User_order.find({
                    _id: context.getReactively('orderId')
                }).fetch();
            }
        };
        reactiveContext.helpers(config);
    };
    return {initSubscribe, userBuyGymSet,numberOrder, detailSubscribe};
};

user_orderServiceFactory.$inject = ['$meteor', '$reactive']; //inject service in there like that: ['UserService']
export default user_orderServiceFactory; 