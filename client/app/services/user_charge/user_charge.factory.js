let user_chargeServiceFactory = function ($meteor, $reactive) {//inject service in there like that: (UserService)

    let initSubscribe = function (context, $scope) {
        let reactiveContext = $reactive(context).attach($scope);
        var handler = context.subscribe('user_get_user_charge_history', function () {
            return [
                parseInt(context.getReactively('limit'))
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
                return User_charge_history.find({});
            },
            rowCount: function () {
                return Counts.get('user_get_user_charge_history' + Meteor.userId());
            },
        };
        reactiveContext.helpers(config);
    };

    return {initSubscribe};
};

user_chargeServiceFactory.$inject = ['$meteor', '$reactive']; //inject service in there like that: ['UserService']
export default user_chargeServiceFactory; 