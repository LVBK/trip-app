import angular from 'angular';
import stepOneComponent from './stepOne.component';

let stepOneModule = angular.module('app.components.reset.password.step.one', [

])
.directive('resetPasswordStepOne', stepOneComponent);

export default stepOneModule;