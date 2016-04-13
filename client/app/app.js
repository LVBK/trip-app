import angular from 'angular';
import 'driftyco/ionic-bower';
import 'driftyco/ng-cordova';
//import 'ionic-native-transitions';
import ionic_css from 'driftyco/ionic-bower/css/ionic.css!';
import LibComponent from './libraries/libraries';
import Pages from './pages/pages';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';
//import 'ows-meteor-client-side';
import 'ows-angular-meteor';
import "spidercpsf/ows-fast-bind";
//import "spidercpsf/accounts-password-client-side";
//import 'collection-client-side';
import 'rajeshwarpatlolla/ionic-toast/src/ionic-toast';
import 'rajeshwarpatlolla/ionic-toast/src/style.css!';

let appModule = angular.module('app', [
	'ionic', 'angular-meteor',
    'ngCordova',
	'owsFastBind',
	//'ionic-native-transitions',
    'ionic-toast',
	Services.name,
	Pages.name,
	Components.name,
    LibComponent.name
])
// .config(($ionicNativeTransitionsProvider)=>{
// 	$ionicNativeTransitionsProvider.setDefaultTransition({
//         duration: 300, // in milliseconds (ms), default 400,
//         type: 'slide',
//         direction: 'left'
//     });
//   	$ionicNativeTransitionsProvider.setDefaultBackTransition({
//         duration: 300, // in milliseconds (ms), default 400,
//         type: 'slide',
//         direction: 'right'
//     });
// })
.config(['$ionicConfigProvider', function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom'); // other values: top
}])
.run(['$ionicPlatform',
    function ($ionicPlatform) {
        $ionicPlatform.ready(()=> {
            facebookConnectPlugin.browserInit(_FB_APP_ID, _FB_APP_VERSION);
        });
        window.handleOpenURL = function(url) {
            console.log("RECEIVED URL: " + url);
        };
    }])
.directive('app', AppComponent);

/*
 * As we are using ES6 with Angular 1.x we can't use ng-app directive
 * to bootstrap the application as modules are loaded asynchronously.
 * Instead, we need to bootstrap the application manually
 */

angular.element(document).ready(()=> {
  angular.bootstrap(document, [appModule.name]), {
    strictDi: true
  }
});

export default appModule;
