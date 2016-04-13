import angular from 'angular';

import EditInfo from './editInfo/editInfo';
import Info from './info/info';

let componentModule = angular.module('app.pages.user', [
    EditInfo.name,
    Info.name,
]);

export default componentModule;