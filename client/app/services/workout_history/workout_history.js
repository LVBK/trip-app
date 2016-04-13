import angular from 'angular';
import WorkoutHistoryFactory from './workout_history.factory';

let workout_historyModule = angular.module('./workout_history', [])
	.factory('WorkoutHistoryService', WorkoutHistoryFactory)
	
export default workout_historyModule;