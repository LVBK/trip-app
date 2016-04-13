import template from './login.html!text';
import controller from './login.controller';
import './login.css!';

let loginComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default loginComponent;
