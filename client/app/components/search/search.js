import angular from 'angular';
import Form from './form/form';

let searchModule = angular.module('app.components.search', [
    Form.name,
]);

export default searchModule;