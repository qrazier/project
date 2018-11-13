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
		this.mall = "true";
  }

  public station: string = "";
  public hDistance: string = "";
  public hRate: string = "";
  public rRate: string = "";
  public mall: any;
  
  stationOpt(){
		let stationOp = this.station;
		return stationOp;	
  }
  hDistanceOpt(){
		let hDistanceOp = this.hDistance;
		return hDistanceOp;
  }
  hRateOpt(){
		let hRateOp = this.hRate;
		return hRateOp;
  }
  rRateOpt(){
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
  }
  
  result(){
		let station = this.stationOpt();
		let hDistance = this.hDistanceOpt();
		let hRate = this.hRateOpt();
		let rRate = this.rRateOpt();
		let mall = this.mallOpt();
		
		this.navCtrl.push(ResultPage, {
			station: station,
			hDistance: hDistance,
			hRate: hRate,
			rRate: rRate,
			mall: mall
		});
  }

	reset(){
		this.hDistance = "";
		this.hRate = "";
		this.rRate = "";
	}
}