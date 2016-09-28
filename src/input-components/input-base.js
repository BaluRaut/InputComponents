export default class InputBaseComponent {

	label;
	model;
	value;
	name;
	validationError;
	minimumLength;
	maximumLength;
	isRequired = false;

	constructor(StringUtility) {
		this.StringUtility = StringUtility;
		if(this.name && !this.label) {
			this.label = this.StringUtility.parseWords(this.name);
		}
	}

	onInit() {
		this.model.$render = () => {
			this.value = this.model.$viewValue;
		}
		if(!this.maximumLength) {
			this.maximumLength = 200;
		}
		if(this.minimumLength) {
			this.isRequired = true;
		}
	}

	onChange() {
		try {
			if(this.value && this.maximumLength && this.value.length > this.maximumLength) {
				this.value = this.value.substring(0, this.maximumLength);
			}
		} catch(e) {
			this.value = '';
			// log this to your system as a security message
		}
		this.model.$setViewValue(this.value);
	}

	validate() {
		if(this.isRequired && this.minimumLength) {
			if(!this.value || this.value.length < this.minimumLength) {
				this.validationError = `has a minium length of ${this.minimumLength}`;
				return false;
			}
		}
		if(this.value && this.maximumLength && this.value.length > this.maximumLength) {
			this.validationError = `has a maximum length of ${this.maximumLength}`;
			// log this to your system as a security message
			return false;
		}

		this.validationError = '';
		return true;
	}

}

InputBaseComponent.$inject = ['StringUtility'];
