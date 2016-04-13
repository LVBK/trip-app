import template from './modalStep.html!text';
import controller from './modalStep.controller';
import './modalStep.css!';

let modalStepComponent = function(){
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

export default modalStepComponent;
