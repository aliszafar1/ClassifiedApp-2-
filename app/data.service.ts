export class DataService{
	private _data: Object = [];

	getRandomData() {
		return this._data;
	}
	insertData(data: Object){
		this._data.push(data);
	}
}