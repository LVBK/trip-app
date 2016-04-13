import angular from 'angular';
import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('app.components.<%= module_name %>', [

])
.directive('<%= directive_name %>', <%= name %>Component);

export default <%= name %>Module;