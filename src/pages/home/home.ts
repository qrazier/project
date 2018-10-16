import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
  station: string ='';
  stationOp: string = '';
  hDistance:string = '';
  hDistanceOp: string = '';
  hRate: string = '';
  hRateOp: string = '';
  rRate: string = '';
  rRateOp: string = '';
  mall: string = '';
  mallOp: string = '';

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public events: Events) {
  }

  ionViewWillLoad(){
    this.events.subscribe('searching', (data) => {
	  console.log(data);
	});
	this.afAuth.authState.subscribe(data => {
	  if(data && data.email && data.uid){
	    this.toast.create({
		  message: 'Welcome to APP_NAME, ${data.email}',
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
  
  public stationOpt(){
	console.log(this.station);
	let stationOp = this.station;
  }
  public hDistanceOpt(){
	//console.log(this.hDistance);
	let hDistanceOp = this.hDistance;
  }
  public hRateOpt(){
	//console.log(this.hRate);
	let hRateOp = this.hRate;
  }
  public rRateOpt(){
	//console.log(this.rRate);
	let rRateOp = this.rRate;
  }
  public mallOpt(){
	console.log(this.mall);
	let mallOp = this.mall;
  }
  
  result(){
    
	let station = this.stationOpt();
	this.hDistanceOpt();
	this.hRateOpt();
	this.rRateOpt();
	this.mallOpt();
	
	console.log(station);
	this.navCtrl.push(ResultPage);
	
	//modal.present();
	
	
	/*this.navCtrl.push(ResultPage, {
		station: this.station,
		hDistance: this.hDistance,
		hRate: this.hRate,
		rRate: this.rRate,
		mall: this.mall
	});*/
  }
  
}