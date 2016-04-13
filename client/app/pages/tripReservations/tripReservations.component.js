import template from './tripReservations.html!text';
import controller from './tripReservations.controller';
import './tripReservations.css!';

let tripReservationsComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default tripReservationsComponent;
