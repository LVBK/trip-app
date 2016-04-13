import template from './stepModal.html!text';
import controller from './stepModal.controller';
import './stepModal.css!';

let stepModalComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			closeModal: '=',
		},
		bindToController: true
	};
};

export default stepModalComponent;
