import angular from 'angular';
import homeComponent from './home.component';

let homeModule = angular.module('app.components.home', [

])
.directive('home', homeComponent);

export default homeModule;