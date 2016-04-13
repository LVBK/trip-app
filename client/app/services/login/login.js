import angular from 'angular';
import LoginFactory from './login.factory';

let loginModule = angular.module('./login', [])
	.factory('LoginService', LoginFactory);
	
export default loginModule;