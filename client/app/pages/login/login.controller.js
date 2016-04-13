class LoginController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'login';
	}
}

LoginController.$inject = []; //inject service in there like that: ['UserService']
export default LoginController;