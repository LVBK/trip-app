import angular from 'angular';
import Home from './home/home';
import Search from './search/search';
import Login from './login/login';
import Signup from './signup/signup';
import ResetPassword from './resetPassword/resetPassword';
import User from './user/user';
import NewTrip from './newTrip/newTrip';
let pagesModule = angular.module('app.pages', [
    Home.name,
    Search.name,
    Login.name,
    Signup.name,
    ResetPassword.name,
    User.name,
    NewTrip.name,
])
    .config(($stateProvider, $urlRouterProvider)=> {
        $urlRouterProvider.otherwise('/home');
    });

export default pagesModule;