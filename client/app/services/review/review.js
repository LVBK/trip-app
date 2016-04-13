import angular from 'angular';
import ReviewFactory from './review.factory';

let reviewModule = angular.module('./review', [])
	.factory('ReviewService', ReviewFactory)
	
export default reviewModule;