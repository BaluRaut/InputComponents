import InputBase from '../input-base'

export default class InputEmailComponent extends InputBase {

	constructor(StringUtility) {
		super(StringUtility);
	}

	$onInit() {
		super.onInit();
		this.validate();
	}

	onChange() {
		super.onChange();
		this.validate();
	}

	validate(){
		if(super.validate()) {
			if(this.value && !this.StringUtility.isEmailValid(this.value)) {
				this.validationError = ' has invalid format';
				return;
			}
		}
	}
}

InputEmailComponent.$inject = ['StringUtility'];
