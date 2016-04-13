import template from './full.html!text';
import controller from './full.controller';
import './full.css!';

let fullComponent = ['$compile', '$parse', function($compile, $parse){
	var linker = function(scope, element, attrs){
		//var content = $parse(attrs.content)(scope);
		//console.log("Content:", attrs.content, content);
		//element.find("#content-wrap").html(content).show();
		//$compile(element.contents())(scope);
	};

	return {
		template,
		controller,
		restrict: 'AE',
		replace: true,
		link: linker,
		controllerAs: 'vm',
		scope: {
			content: "=content",
			callback: "=callback",
			bindData: "=binData",
			staticData: "&staticData"
		},
		bindToController: true
	};
}];

export default fullComponent;
