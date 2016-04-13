import template from './myReservations.html!text';
import controller from './myReservations.controller';
import './myReservations.css!';

let myReservationsComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default myReservationsComponent;
