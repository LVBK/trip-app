import angular from 'angular';
import modalStepComponent from './modalStep.component';

let modalStepModule = angular.module('app.components.reset.password.modal.step', [

])
.directive('resetPasswordModalStep', modalStepComponent);

export default modalStepModule;