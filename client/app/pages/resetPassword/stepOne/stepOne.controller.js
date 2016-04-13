class StepOneController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'stepOne';
	}
}

StepOneController.$inject = []; //inject service in there like that: ['UserService']
export default StepOneController;