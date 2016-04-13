class SignupController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'signup';
	}
}

SignupController.$inject = []; //inject service in there like that: ['UserService']
export default SignupController;