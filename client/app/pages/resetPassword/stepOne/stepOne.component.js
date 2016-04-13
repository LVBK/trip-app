import template from './stepOne.html!text';
import controller from './stepOne.controller';
import './stepOne.css!';

let stepOneComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default stepOneComponent;
