import angular from 'angular';
import searchComponent from './search.component';

let searchModule = angular.module('app.page.search', [

])
.config(($stateProvider, $urlRouterProvider)=>{
	$stateProvider
		.state('app.search', {//TODO: Add parent state like app.search
		    url: '/search',
			views: {
				'mainContent': searchComponent(),
			}
		 })
})
//.directive('pageSearch', searchComponent);

export default searchModule;