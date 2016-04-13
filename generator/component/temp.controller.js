class <%= upCaseName %>Controller {
	constructor(){ //inject service in there like that: (UserService)
		this.name = '<%= name %>';
	}
}

<%= upCaseName %>Controller.$inject = []; //inject service in there like that: ['UserService']
export default <%= upCaseName %>Controller;