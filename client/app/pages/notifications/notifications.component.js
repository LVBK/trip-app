import template from './notifications.html!text';
import controller from './notifications.controller';
import './notifications.css!';

let notificationsComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default notificationsComponent;
