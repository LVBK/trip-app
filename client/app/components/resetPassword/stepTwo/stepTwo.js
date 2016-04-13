import angular from 'angular';
import stepTwoComponent from './stepTwo.component';

let stepTwoModule = angular.module('app.components.reset.password.step.two', [

])
.directive('resetPasswordStepTwo', stepTwoComponent);

export default stepTwoModule;