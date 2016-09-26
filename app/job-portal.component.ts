import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {AdsService} from './ads.service';
import {Ads} from './ads';
import {OnInit} from 'angular2/core';

@Component({
	templateUrl: 'app/jobs.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [AdsService],
	styleUrls: ['app/job-portal-style.css']
})

export class JobPortalComponent implements OnInit{
	public ads: Ads[]
	constructor(private _adsService: AdsService){}

	getAds(){
		this._adsService.getAds().then((ads: Ads[]) => this.ads = ads);
	}

	ngOnInit(): any{
		this.getAds();
	}
}