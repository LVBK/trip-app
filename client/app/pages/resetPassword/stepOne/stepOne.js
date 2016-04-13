import angular from 'angular';
import stepOneComponent from './stepOne.component';

let stepOneModule = angular.module('app.page.reset.password.step.one', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.stepOne', {//TODO: Add parent state like app.stepOne
		    url: '/forgotPassword',
			views: {
				'mainContent': stepOneComponent(),
			}
		 })
})
.directive('pageResetPasswordStepOne', stepOneComponent);

export default stepOneModule;