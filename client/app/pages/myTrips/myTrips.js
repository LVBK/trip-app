import angular from 'angular';
import myTripsComponent from './myTrips.component';

let myTripsModule = angular.module('app.page.my.trips', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.myTrips', {//TODO: Add parent state like app.myTrips
		    url: '/myTrips',
			views: {
				'mainContent': myTripsComponent(),
			}
		 })
})
.directive('pageMyTrips', myTripsComponent);

export default myTripsModule;