import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Events, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

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
  
  result(){
    
	let data = {
		/*station: this.station,
		hDistance: this.hDistance,
		hRate: this.hRate,
		rRate: this.rRate,
		mall: this.mall*/
	};
	//let modal = this.modalCtrl.create(ResultPage);
	
	this.events.publish('searching', data);
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
