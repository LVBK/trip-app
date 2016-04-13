import template from './signup.html!text';
import controller from './signup.controller';
import './signup.css!';

let signupComponent = function(){
	return {
		template,
		controller,
		replace: true,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default signupComponent;
