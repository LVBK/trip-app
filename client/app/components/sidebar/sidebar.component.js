import template from './sidebar.html!text';
import controller from './sidebar.controller';
import './sidebar.css!';

let sidebarComponent = function () {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default sidebarComponent;
