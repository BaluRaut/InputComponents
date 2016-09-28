import angular from 'angular';
import InputTextComponent from './input-text/input-text.component';
import InputEmailComponent from './input-email/input-email.component';
import InputUrlComponent from './input-url/input-url.component';
import InputPasswordComponent from './input-password/input-password.component';
import StringUtility from './string-utility';

export default angular
	.module('main.app.inputComponents', [])
	.component('inputText', {
		templateUrl: '/src/input-components/input-text/input-text.component.html',
		controller: InputTextComponent,
		controllerAs: 'vm',
		require: {
			model: "ngModel"
		},
		bindings: {
			label: "@",
			minimumLength: "@",
			maximumLength: "@",
			name: "@"
		}
	})
	.component('inputEmail', {
		templateUrl: '/src/input-components/input-email/input-email.component.html',
		controller: InputEmailComponent,
		controllerAs: 'vm',
		require: {
			model: "ngModel"
		},
		bindings: {
			label: "@",
			minimumLength: "@",
			maximumLength: "@",
			name: "@"
		}
	})
	.component('inputUrl', {
		templateUrl: '/src/input-components/input-url/input-url.component.html',
		controller: InputUrlComponent,
		controllerAs: 'vm',
		require: {
			model: "ngModel"
		},
		bindings: {
			label: "@",
			minimumLength: "@",
			maximumLength: "@",
			name: "@"
		}
	})
	.component('inputPassword', {
		templateUrl: '/src/input-components/input-password/input-password.component.html',
		controller: InputPasswordComponent,
		controllerAs: 'vm',
		require: {
			model: "ngModel"
		},
		bindings: {
			label: "@",
			minimumLength: "@",
			maximumLength: "@",
			name: "@"
		}
	})
	.service('StringUtility', StringUtility)
	.name;
