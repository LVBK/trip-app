import angular from 'angular';
import fullComponent from './full.component';

let fullModule = angular.module('app.components.masterpage.full', [
])
.directive('commonMasterpageFull', fullComponent)
.config(($stateProvider, $urlRouterProvider)=> {
	$stateProvider
		.state('app', {
			abstract: true,
			template: '<common-masterpage-full/>',
		})
})
export default fullModule;