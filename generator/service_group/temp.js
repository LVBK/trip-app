import angular from 'angular';
//adding service by: import ServicenameFactory from './servicename.factory';

let <%= name %>Module = angular.module('./<%= name %>', [])
	//adding service by .factory('ServicenameService', ServicenameFactory)
	
export default <%= name %>Module;