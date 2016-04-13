import angular from 'angular';
import signupComponent from './signup.component';

let signupModule = angular.module('app.page.signup', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.signup', {//TODO: Add parent state like app.signup
		    url: '/signup',
			views: {
				'mainContent': signupComponent(),
			}
		 })
})
//.directive('pageSignup', signupComponent);

export default signupModule;