import angular from 'angular';
import UserOrderFactory from './user_order.factory';

let user_orderModule = angular.module('./user_order', [])
	.factory('UserOrderService', UserOrderFactory)
	
export default user_orderModule;