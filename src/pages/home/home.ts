import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ModalController, Events, ToastController, ModalOptions } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { ResultPage } from '../result/result';
//import { LoginPage } from './../login/login';
import { User } from 'models/user';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})

export class HomePage {
	user = {} as User;

	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
		public events: Events, public app: App, public afAuth: AngularFireAuth,
		private toast: ToastController, ) {
		this.station = "KL Sentral";
		this.type = "Any";
		this.halal = true;
		this.login = this.navParams.data.login;
		
		if (this.login) this.user = this.navParams.data.user.email;
		
		console.log(this.login);
		console.log(this.user);
	}

	public station: string = "";
	public distance: string = "";
	public login = false;
	choice: string = "No";

	//hotel
	public rate: string = "";
	//restaurant
	public type: string = "";
	public sType: string = "";
	public halal: boolean;
	//mall

	//tourist_attraction

	logoutClicked() {
		console.log("Logout");
		this.afAuth.auth.signOut().then(() => {
			this.toast.create({
				message: `Logout.`,
				duration: 3000
			}).present();
		});
		var nav = this.app.getRootNav();
		nav.setRoot('HomePage');
		console.log("User :" + this.user + ".");
	}
	loginClicked() {
		const modalOptions: ModalOptions = {
			cssClass: "signInModal"
		};
		const profileModal = this.modalCtrl.create('LoginPage', {}, modalOptions);
		profileModal.present();
	}

	stationOpt() {
		let stationOp = this.station;
		return stationOp;
	}
	choiceOpt() {
		let choiceOp = this.choice;
		return choiceOp;
	}
	distanceOpt() {
		let distanceOp = this.distance;
		return distanceOp;
	}
	rateOpt() {
		let rateOp = this.rate;
		return rateOp;
	}
	typeOpt() {
		let typeOp = this.type;
		return typeOp;
	}
	halalOpt() {
		let halalOp = this.halal;
		return halalOp;
	}
	sTypeOpt(){
		let sTypeOp = this.sType;
		return sTypeOp;
		
	}

	result() {
		let station = this.stationOpt();
		let choice = this.choiceOpt();
		let distance = this.distanceOpt();
		let rate = this.rateOpt();
		let type = this.typeOpt();
		let halal = this.halalOpt();
		let sType = this.sTypeOpt();

		this.navCtrl.push(ResultPage, {
			choice: choice,
			station: station,
			distance: distance,
			rate: rate,
			type: type,
			halal: halal,
			sType: sType,
		});
	}

	reset() {
		this.station = "KL Sentral";
		this.distance = "";
		this.rate = "";
		this.type = "Any";
		this.choice = "No";
		this.sType = "";
	}
}