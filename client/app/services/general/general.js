import angular from 'angular';
import GeneralFactory from './general.factory';

let generalModule = angular.module('./general', [])
    .factory('GeneralService', GeneralFactory)
	
export default generalModule;