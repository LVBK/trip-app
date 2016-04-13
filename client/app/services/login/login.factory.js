let loginServiceFactory = function ($meteor) {//inject service in there like that: (UserService)

    let signUp = function (user, callback) {
        Accounts.createUser(user, callback);
    };
    let signIn = function (email, password, callback) {
        Meteor.loginWithPassword(email, password ,callback);
    };
    let logOut = function (callback) {
        Meteor.logout(callback);
    };
    let changePassword = function (oldPassWord, newPassWord, callback) {
        Accounts.changePassword(oldPassWord, newPassWord, callback);
    };
    let forgotPassword = function (email, callback) {
        Accounts.forgotPassword({email: email}, callback);
    };
    let resetPassword = function (token, newPassWord, callback) {
        Accounts.resetPassword(token, newPassWord, callback);
    };
    let logoutOtherClients = function (callback) {
        Meteor.logoutOtherClients(callback);
    };
    let checkTokenExpired = function (token, callback) {
        Meteor.call('checkTokenExpired',token, callback);
    };
    let facebookLogin = function(accessToken, callback){
        var loginRequest = {facebook: true, accessToken: accessToken};
        Accounts.callLoginMethod({
            methodArguments: [loginRequest],
            userCallback: callback
        });
    }
    return {signUp, signIn, logOut, changePassword, forgotPassword,
        resetPassword, logoutOtherClients, checkTokenExpired, facebookLogin};
};

loginServiceFactory.$inject = ['$meteor']; //inject service in there like that: ['UserService']
export default loginServiceFactory; 