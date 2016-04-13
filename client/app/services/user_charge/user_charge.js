import angular from 'angular';
import UserChargeFactory from './user_charge.factory';

let user_chargeModule = angular.module('./user_charge', [])
    .factory('UserChargeService', UserChargeFactory)
	
export default user_chargeModule;