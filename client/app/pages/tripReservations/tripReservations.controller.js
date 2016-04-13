class TripReservationsController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'tripReservations';
	}
}

TripReservationsController.$inject = []; //inject service in there like that: ['UserService']
export default TripReservationsController;