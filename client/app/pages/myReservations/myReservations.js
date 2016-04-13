import angular from 'angular';
import myReservationsComponent from './myReservations.component';

let myReservationsModule = angular.module('app.page.my.reservations', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.myReservations', {//TODO: Add parent state like app.myReservations
		    url: '/myReservations',
			views: {
				'mainContent': myReservationsComponent(),
			}
		 })
})
.directive('pageMyReservations', myReservationsComponent);

export default myReservationsModule;