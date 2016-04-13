import template from './stepTwo.html!text';
import controller from './stepTwo.controller';
import './stepTwo.css!';

let stepTwoComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default stepTwoComponent;
