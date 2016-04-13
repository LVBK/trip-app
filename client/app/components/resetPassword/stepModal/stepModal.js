import angular from 'angular';
import stepModalComponent from './stepModal.component';

let stepModalModule = angular.module('app.components.reset.password.step.modal', [

])
.directive('resetPasswordStepModal', stepModalComponent);

export default stepModalModule;