import angular from 'angular';
import MasterPageFull from './full/full';

let masterpageModule = angular.module('app.components.masterpage', [
	MasterPageFull.name,
]);

export default masterpageModule;