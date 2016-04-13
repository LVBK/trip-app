import template from './formInfo.html!text';
import controller from './formInfo.controller';
import './formInfo.css!';

let formInfoComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default formInfoComponent;
