import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { ResultPage } from '../result/result';
import { AddHotelPage } from '../add-hotel/add-hotel';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
	public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public events: Events, public MyApp: MyApp) {
  }

  ionViewWillLoad(){
    this.events.subscribe('searching', (data) => {
	  console.log(data);
		});
		this.afAuth.authState.subscribe(data => {
			if(data && data.email && data.uid){
				this.toast.create({
				message: 'Welcome to MyApp, ${data.email}',
				duration: 3000
				}).present();
			}
			else{
			this.toast.create({
				message: 'Could not find authentication details',
				duration: 3000
				}).present();
			}
		});
  }
  public station: string = '';
  public hDistance: string = '';
  public hRate: string = '';
  public rRate: string = '';
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

  addHotel(){
	this.navCtrl.push(AddHotelPage);
  }
}