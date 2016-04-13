class NewTripController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'newTrip';
	}
}

NewTripController.$inject = []; //inject service in there like that: ['UserService']
export default NewTripController;