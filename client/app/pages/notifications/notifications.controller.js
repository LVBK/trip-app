class NotificationsController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'notifications';
	}
}

NotificationsController.$inject = []; //inject service in there like that: ['UserService']
export default NotificationsController;