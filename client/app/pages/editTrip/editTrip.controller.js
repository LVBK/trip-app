class EditTripController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'editTrip';
	}
}

EditTripController.$inject = []; //inject service in there like that: ['UserService']
export default EditTripController;