import template from './editInfo.html!text';
import controller from './editInfo.controller';
import './editInfo.css!';

let editInfoComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default editInfoComponent;
