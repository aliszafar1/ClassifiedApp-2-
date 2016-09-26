import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	templateUrl: 'app/signup-form.html',
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ['app/signup-form-style.css']
})

export class SignupFormComponent{
	data: Object = {};

	constructor(private _router:Router){};
	signUp(){
		console.log(this.data);
		if(this.data.username == "admin" && this.data.password == "admin"){
			this._router.navigate(['AdminArea']);
			
		} else {
			this._router.navigate(['SignupForm']);
		}
	}
}