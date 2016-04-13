import angular from 'angular';
import notificationsComponent from './notifications.component';

let notificationsModule = angular.module('app.page.notifications', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.notifications', {//TODO: Add parent state like app.notifications
		    url: '/notifications',
			views: {
				'mainContent': notificationsComponent(),
			}
		 })
})
.directive('pageNotifications', notificationsComponent);

export default notificationsModule;