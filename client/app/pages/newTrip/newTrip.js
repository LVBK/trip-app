import angular from 'angular';
import newTripComponent from './newTrip.component';

let newTripModule = angular.module('app.page.new.trip', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.newTrip', {//TODO: Add parent state like app.newTrip
		    url: '/newTrip',
			views: {
				'mainContent': newTripComponent(),
			}
		 })
})
.directive('pageNewTrip', newTripComponent);

export default newTripModule;