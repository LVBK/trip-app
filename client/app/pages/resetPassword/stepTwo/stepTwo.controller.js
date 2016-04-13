class StepTwoController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'stepTwo';
	}
}

StepTwoController.$inject = []; //inject service in there like that: ['UserService']
export default StepTwoController;