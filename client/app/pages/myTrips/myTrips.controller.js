class MyTripsController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'myTrips';
	}
}

MyTripsController.$inject = []; //inject service in there like that: ['UserService']
export default MyTripsController;