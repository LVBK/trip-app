import angular from 'angular';
import sidebarComponent from './sidebar.component';

let sidebarModule = angular.module('app.components.sidebar', [

])
.directive('sidebar', sidebarComponent);

export default sidebarModule;