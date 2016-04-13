import angular from 'angular';
import stepTwoComponent from './stepTwo.component';

let stepTwoModule = angular.module('app.page.reset.password.step.two', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.stepTwo', {//TODO: Add parent state like app.stepTwo
		    url: '/reset-password/:token',
			views: {
				'mainContent': stepTwoComponent(),
			}
		 })
})
.directive('pageResetPasswordStepTwo', stepTwoComponent);

export default stepTwoModule;