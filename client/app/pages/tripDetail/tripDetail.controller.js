class TripDetailController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'tripDetail';
	}
}

TripDetailController.$inject = []; //inject service in there like that: ['UserService']
export default TripDetailController;