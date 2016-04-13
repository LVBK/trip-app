let <%= name %>ServiceFactory = function(){//inject service in there like that: (UserService)
	
	let hello = function() {
		console.log("hello")
	}

	return { login };
};

<%= name %>ServiceFactory.$inject = []; //inject service in there like that: ['UserService']
export default <%= name %>ServiceFactory; 