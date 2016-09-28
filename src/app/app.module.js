import angular from 'angular';
import RootComponent from './root/root.component';
import HomeComponent from './home/home.component';
import ngComponentRouter from 'ngcomponentrouter';

export default angular
	.module('main.app', [ngComponentRouter])
	.component('root', {
		templateUrl: '/src/app/root/root.component.html',
		controller: RootComponent,
		controllerAs: 'vm',
		$routeConfig: [{
			path: '/home',
			component: 'home',
			name: 'Home'
		}, {
			path: '/**',
			redirectTo: ['Home']
		}]
	})
	.component('home', {
		templateUrl: '/src/app/home/home.component.html',
		controller: HomeComponent,
		controllerAs: 'vm'
	})
	.directive('match', ['$parse', function($parse) {
		return {
			require: 'ngModel',
			link: function(scope, elem, attrs, ctrl) {
				scope.$watch(function() {
					return $parse(attrs.match)(scope) === ctrl.$modelValue;
				}, function(currentValue) {
					ctrl.$setValidity('mismatch', currentValue);
				});
			}
		};
	}])
	.name;
