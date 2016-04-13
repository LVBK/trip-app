class HomeController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'home';
	}
}

HomeController.$inject = []; //inject service in there like that: ['UserService']
export default HomeController;