import angular from 'angular';
import formComponent from './form.component';

let formModule = angular.module('app.components.search.form', [

])
.directive('searchForm', formComponent);

export default formModule;