import angular from 'angular';
import formInfoComponent from './formInfo.component';

let formInfoModule = angular.module('app.components.user.form.info', [

])
.directive('userFormInfo', formInfoComponent);

export default formInfoModule;