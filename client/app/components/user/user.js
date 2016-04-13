import angular from 'angular';

import FormEditInfo from './formEditInfo/formEditInfo';
import FormInfo from './formInfo/formInfo';

let componentModule = angular.module('app.components.user', [
    FormEditInfo.name,
    FormInfo.name,
]);

export default componentModule;