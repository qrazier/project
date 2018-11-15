import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events } from 'ionic-angular';

import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public events: Events) {
	this.station = "KL Sentral";
	//this.mall = "true";
  }

  public station: string = "";
  public distance: string = "";
  public rate: string = "";
  //public rRate: string = "";
  //public mall: any;
  
  stationOpt(){
		let stationOp = this.station;
		return stationOp;	
  }
  distanceOpt(){
		let distanceOp = this.distance;
		return distanceOp;
  }
  rateOpt(){
		let rateOp = this.rate;
		return rateOp;
  }
  
  /*rRateOpt(){
		let rRateOp = this.rRate;
		return rRateOp;
	}
	
  mallOpt(){
		let mallOp: string = '';
		if(this.mall){
			 mallOp = 'Yes';
		}else{
			 mallOp = 'No';
		}
		return mallOp;
  }*/
  
  result(){
		let station = this.stationOpt();
		let distance = this.distanceOpt();
		let rate = this.rateOpt();
		//let rRate = this.rRateOpt();
		//let mall = this.mallOpt();
		
		this.navCtrl.push(ResultPage, {
			station: station,
			distance: distance,
			rate: rate,
			//rRate: rRate,
			//mall: mall
		});
  }

	reset(){
		this.distance = "";
		this.rate = "";
		//this.rRate = "";
	}
}