let workout_historyServiceFactory = function ($meteor, $reactive) {//inject service in there like that: (UserService)

    let initSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_workout_history', function () {
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
                return Workout_history.find({}, {
                    sort: context.getReactively('sort'),
                    limit: parseInt(context.getReactively('limit'))
                }).fetch();
            },
            gymData: function () {
                return Gym_info.find({});
            },
            rowCount: function () {
                return Counts.get('user_get_workout_history' + Meteor.userId());
            },
        };
        reactiveContext.helpers(config);
    };
    let checkUserReviewable = function (gymId, callback) {
        $meteor.call('checkUserReviewable', gymId).then(function (result) {
            callback(false, result);
        }, function (err) {
            callback(err);
        });
    };
    let gymCheckout = function (workoutId, callback) {
        $meteor.call('userCheckout', workoutId).then(function (result) {
            callback(false, result);
        }, function (err) {
            callback(err)
        })
    }
    return {initSubscribe, checkUserReviewable, gymCheckout};
};

workout_historyServiceFactory.$inject = ['$meteor', '$reactive']; //inject service in there like that: ['UserService']
export default workout_historyServiceFactory; 