import template from './tripDetail.html!text';
import controller from './tripDetail.controller';
import './tripDetail.css!';

let tripDetailComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default tripDetailComponent;
