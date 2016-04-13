import angular from 'angular';
import infoComponent from './info.component';

let infoModule = angular.module('app.page.user.info', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.info', {
		    url: '/info/:tab',
			views: {
				'mainContent': infoComponent(),
			}
		 })
})
.directive('pageUserInfo', infoComponent);

export default infoModule;