import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {DataService} from './data.service';

@Component({
	templateUrl: 'app/add-more-form.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [DataService],
	styleUrls: ['app/add-more-style.css']
})

export class AddMoreComponent{

	// public data: Object = {
	// };
	// public receiveData: Object = {};
	// public showDetail = false;

	// constructor(private _router:Router, private _dataService: DataService){};
	// onGetData(){
	// 	this.receiveData = this._dataService.getRandomData();
	// 	this.showDetail = true;
	// }

	// addMore(data: Object){
	// 	this._dataService.insertData(data);
	// 	console.log(this.data);
	// 
}
}