import angular from 'angular';
import MasterPage from './masterpage/masterpage';
import HomeComp from './home/home';
import Search from './search/search';
import Login from './login/login';
import Signup from './signup/signup';
import ResetPassword from './resetPassword/resetPassword';
import Sidebar from './sidebar/sidebar';
import User from './user/user';
import NewTrip from './newTrip/newTrip';

let componentModule = angular.module('app.components', [
    MasterPage.name,
    HomeComp.name,
    Search.name,
    Login.name,
    Signup.name,
    ResetPassword.name,
    Sidebar.name,
    User.name,
    NewTrip.name,
]);

export default componentModule;