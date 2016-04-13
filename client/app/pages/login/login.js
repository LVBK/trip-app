import angular from 'angular';
import loginComponent from './login.component';

let loginModule = angular.module('app.page.login', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.login', {//TODO: Add parent state like app.login
		    url: '/login',
			views: {
				'mainContent': loginComponent(),
			}
		 })
})
//.directive('pageLogin', loginComponent);

export default loginModule;