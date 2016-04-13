import template from './newTrip.html!text';
import controller from './newTrip.controller';
import './newTrip.css!';

let newTripComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default newTripComponent;
