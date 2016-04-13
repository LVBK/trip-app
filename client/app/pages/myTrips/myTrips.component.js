import template from './myTrips.html!text';
import controller from './myTrips.controller';
import './myTrips.css!';

let myTripsComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default myTripsComponent;
