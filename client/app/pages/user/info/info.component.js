import template from './info.html!text';
import controller from './info.controller';
import './info.css!';

let infoComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default infoComponent;
