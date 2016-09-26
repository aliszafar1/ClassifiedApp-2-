import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {JobPortalComponent} from './job-portal.component';
import {LoginFormComponent} from './login-form.component';
import {SignupFormComponent} from './signup-form.component';
import {AddMoreComponent} from './add-more.component';

@Component({
	selector: 'my-app',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
		{ path: '/', name: 'LoginForm', component: LoginFormComponent},
		{ path: '/signup', name: 'SignupForm', component: SignupFormComponent},
		{ path: '/jobs', name: 'AdminArea', component: JobPortalComponent},
		{ path: '/addmore', name: 'AddMore', component: AddMoreComponent}
		
	])

export class AppComponent{

}