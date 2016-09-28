import InputBase from '../input-base'

export default class InputUrlComponent extends InputBase {

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
			if(this.value && !this.StringUtility.isUrlValid(this.value)) {
				this.validationError = ' has invalid format';
				return;
			}
		}
	}
}

InputUrlComponent.$inject = ['StringUtility'];
