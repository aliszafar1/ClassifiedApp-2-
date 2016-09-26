import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	templateUrl: 'app/home.html',
	directives: [ROUTER_DIRECTIVES],
	styleUrls: ['app/home-style.css']
})

export class LoginFormComponent{
	data: Object = {};
	public errorFlag = false;

	constructor(private _router:Router){};
	formSubmit(){
		console.log(this.data);
		if(this.data.username == "admin" && this.data.password == "admin"){
			this._router.navigate(['AdminArea']);
			
		} else {
			this.errorFlag = true;
		}
	}
}