import angular from 'angular';
import GymFactory from './gym.factory';

let gymModule = angular.module('./gym', [])
    .factory('GymService', GymFactory);

export default gymModule;