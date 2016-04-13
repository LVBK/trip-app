import template from './formEditInfo.html!text';
import controller from './formEditInfo.controller';
import './formEditInfo.css!';

let formEditInfoComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default formEditInfoComponent;
