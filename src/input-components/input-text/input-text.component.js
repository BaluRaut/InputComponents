import InputBase from '../input-base'

export default class InputTextComponent extends InputBase {

	constructor(StringUtility) {
		super(StringUtility);
	}

	$onInit() {
		super.onInit();
		super.validate();
	}

	onChange() {
		super.onChange();
		super.validate();
	}
}

InputTextComponent.$inject = ['StringUtility'];
