import template from './editTrip.html!text';
import controller from './editTrip.controller';
import './editTrip.css!';

let editTripComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default editTripComponent;
