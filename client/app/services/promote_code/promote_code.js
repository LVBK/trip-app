import angular from 'angular';
import PromoteCodeFactory from './promote_code.factory';

let promote_codeModule = angular.module('./promote_code', [])
	.factory('PromoteCodeService', PromoteCodeFactory)
	
export default promote_codeModule;