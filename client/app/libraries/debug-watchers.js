var preWachers = [];
setInterval(function(){
  	(function () { 
	    var root = angular.element(document.getElementsByTagName('body'));

	    var watchers = [];

	    var f = function (element) {
	        angular.forEach(['$scope', '$isolateScope'], function (scopeProperty) { 
	            if (element.data() && element.data().hasOwnProperty(scopeProperty)) {
	                angular.forEach(element.data()[scopeProperty].$$watchers, function (watcher) {
	                	watcher.bak_element = element;
	                    watchers.push(watcher);
	                });
	            }
	        });

	        angular.forEach(element.children(), function (childElement) {
	            f(angular.element(childElement));
	        });
	    };

	    f(root);

	    // Remove duplicate watchers
	    var watchersWithoutDuplicates = [];
	    var diffWatchers = [];
	    angular.forEach(watchers, function(item) {
	        if(watchersWithoutDuplicates.indexOf(item) < 0) {
	            watchersWithoutDuplicates.push(item);
	        }
	        if(preWachers.indexOf(item)<0){
	        	diffWatchers.push(item);
	        }
	    });

	    //making distribution map for watchers
	    var elementsWithoutDuplicates = [];
	    angular.forEach(watchersWithoutDuplicates, function(watcher) {
	    	var isAdded = false;
	    	angular.forEach(elementsWithoutDuplicates, function(group) {
	    		if(group.element == watcher.bak_element){
	    			group.watchers.push(watcher);
	    			isAdded = true;
	    		}
	    	});	
	        if(!isAdded) elementsWithoutDuplicates.push({element: watcher.bak_element, watchers: [watcher.bak_element]});
	    });
	    elementsWithoutDuplicates.sort(function(a, b){return b.watchers.length-a.watchers.length});
	    console.log("Watchers:", elementsWithoutDuplicates);
	    console.log("Delta:Watchers:", diffWatchers);
	    console.log("Watchers:" + watchersWithoutDuplicates.length + " in " + elementsWithoutDuplicates.length + " elements");
	    preWachers = watchersWithoutDuplicates;
	})();
  }, 5000);