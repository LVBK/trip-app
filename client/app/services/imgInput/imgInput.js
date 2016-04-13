import angular from 'angular';
import ImgInputService from './imgInput.factory';

let ImgInputServiceModule = angular.module('app.services.imgInput', [])
    .factory('ImgInput', ImgInputService);

export default ImgInputServiceModule;
