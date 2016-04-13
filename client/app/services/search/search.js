import angular from 'angular';
import SearchFactory from './search.factory';

let searchModule = angular.module('app.services.search', [])
    .factory('SearchService', SearchFactory)
	
export default searchModule;