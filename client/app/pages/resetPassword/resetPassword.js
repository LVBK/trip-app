import angular from 'angular';
import StepOne from './stepOne/stepOne';
import StepTwo from './stepTwo/stepTwo';


let resetPasswordModule = angular.module('app.page.reset.password', [
	StepOne.name,
	StepTwo.name,
]);

export default resetPasswordModule;