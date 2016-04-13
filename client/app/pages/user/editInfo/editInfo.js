import angular from 'angular';
import editInfoComponent from './editInfo.component';

let editInfoModule = angular.module('app.page.user.edit.info', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.editInfo', {//TODO: Add parent state like app.editInfo
		    url: '/editInfo',
			views: {
				'mainContent': editInfoComponent(),
			}
		 })
})
.directive('pageUserEditInfo', editInfoComponent);

export default editInfoModule;