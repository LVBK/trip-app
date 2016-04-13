import angular from 'angular';
import tripReservationsComponent from './tripReservations.component';

let tripReservationsModule = angular.module('app.page.trip.reservations', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.tripReservations', {//TODO: Add parent state like app.tripReservations
		    url: '/tripReservations',
			views: {
				'mainContent': tripReservationsComponent(),
			}
		 })
})
.directive('pageTripReservations', tripReservationsComponent);

export default tripReservationsModule;