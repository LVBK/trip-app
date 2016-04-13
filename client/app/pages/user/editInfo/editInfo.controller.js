class EditInfoController {
	constructor(){ //inject service in there like that: (UserService)
		this.name = 'editInfo';
	}
}

EditInfoController.$inject = []; //inject service in there like that: ['UserService']
export default EditInfoController;