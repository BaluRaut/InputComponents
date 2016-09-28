import InputBase from '../input-base'

export default class InputPasswordComponent extends InputBase {

	score;
	passwordStrengthMessage;
	passwordStrengthClass = 'red';

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

	validate() {
		if(super.validate() && this.value) {
			this.score = this.StringUtility.checkPassword(this.value);
			this.passwordStrengthMessage = this.StringUtility.getPasswordScoreText(this.score);
			this.passwordStrengthClass = this.StringUtility.getPasswordStrengthClass(this.score);

		}
	}
}

InputPasswordComponent.$inject = ['StringUtility'];
