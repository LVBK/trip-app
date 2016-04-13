let promote_codeServiceFactory = function ($meteor, $reactive) {//inject service in there like that: (UserService)

    let userUsePromoteCode = function (promoteCode, callback) {
        $meteor.call('userUsePromoteCode', promoteCode).then(function (result) {
            callback(false, result);
        }, function (err) {
            callback(err)
        });

    };

    return {
        userUsePromoteCode
    };
};

promote_codeServiceFactory.$inject = ['$meteor', '$reactive']; //inject service in there like that: ['UserService']
export default promote_codeServiceFactory; 