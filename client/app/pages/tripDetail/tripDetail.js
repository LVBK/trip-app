import angular from 'angular';
import tripDetailComponent from './tripDetail.component';

let tripDetailModule = angular.module('app.page.trip.detail', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.tripDetail', {//TODO: Add parent state like app.tripDetail
		    url: '/tripDetail',
			views: {
				'mainContent': tripDetailComponent(),
			}
		 })
})
.directive('pageTripDetail', tripDetailComponent);

export default tripDetailModule;