import template from './form.html!text';
import controller from './form.controller';
import './form.css!';

let formComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default formComponent;
