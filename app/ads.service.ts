import {Injectable} from  'angular2/core';
import {ADS} from './mock-ads';

@Injectable()

export class AdsService{
	getAds(){
		return Promise.resolve(ADS);
	}

	postAds(data: string){
		this.ADS.push(data);
	}
}
