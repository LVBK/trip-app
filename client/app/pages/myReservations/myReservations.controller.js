class MyReservationsController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'myReservations';
	}
}

MyReservationsController.$inject = []; //inject service in there like that: ['UserService']
export default MyReservationsController;