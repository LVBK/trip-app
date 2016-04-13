import angular from 'angular';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('app.<%= module_name %>', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.<%= name %>', {//TODO: Add parent state like app.<%= name %>
		    url: '/<%= name %>',
			views: {
				'mainContent': <%= name %>Component(),
			}
		 })
})
.directive('<%= directive_name %>', <%= name %>Component);

export default <%= name %>Module;