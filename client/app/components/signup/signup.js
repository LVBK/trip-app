import angular from 'angular';
import signupComponent from './signup.component';

let signupModule = angular.module('app.components.signup', [

])
.directive('signup', signupComponent);

export default signupModule;