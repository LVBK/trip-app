import angular from 'angular';
import loginComponent from './login.component';

let loginModule = angular.module('app.components.login', [

])
.directive('login', loginComponent);

export default loginModule;