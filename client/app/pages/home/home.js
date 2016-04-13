import angular from 'angular';
import homeComponent from './home.component';

let homeModule = angular.module('app.page.home', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.home', {//TODO: Add parent state like app.home
		    url: '/home',
			views: {
				'mainContent': homeComponent(),
			}
		 })
})
.directive('pageHome', homeComponent);

export default homeModule;