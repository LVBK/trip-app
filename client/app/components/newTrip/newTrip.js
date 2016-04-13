import angular from 'angular';
import newTripComponent from './newTrip.component';

let newTripModule = angular.module('app.components.new.trip', [

])
.directive('newTrip', newTripComponent);

export default newTripModule;