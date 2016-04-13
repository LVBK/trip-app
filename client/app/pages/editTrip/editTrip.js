import angular from 'angular';
import editTripComponent from './editTrip.component';

let editTripModule = angular.module('app.page.edit.trip', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.editTrip', {//TODO: Add parent state like app.editTrip
		    url: '/editTrip',
			views: {
				'mainContent': editTripComponent(),
			}
		 })
})
.directive('pageEditTrip', editTripComponent);

export default editTripModule;