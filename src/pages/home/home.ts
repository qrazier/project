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
		this.rType = "Any";
		this.halal = true;
		this.login = this.navParams.data.login;
		this.mType = "Groceries";

		if (this.login) this.email = this.navParams.data.user.email;
	}

	public station: string = "";
	public login = false;
	public email = "";
	choice: string = "No";

	//hotel
	public hRate: string = "";
	public hDistance: string = "";
	//restaurant
	public rDistance: string = "";
	public rType: string;
	public halal: boolean = true;
	//mall
	public mDistance: string = "";
	public mType: string = "";
	//tourist_attraction
	public aDistance: string = "";
	public aFee: string = "";

	logoutClicked() {
		console.log("Logout");
		this.afAuth.auth.signOut().then(() => {
			this.toast.create({
				message: `Logout.`,
				duration: 3000
			}).present();
		});
		this.navCtrl.setRoot('HomePage', { login: false });
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

	//hotel
	hDistanceOpt() {
		let distanceOp = this.hDistance;
		return distanceOp;
	}
	hRateOpt() {
		let rateOp = this.hRate;
		return rateOp;
	}

	//restaurant
	rDistanceOpt() {
		let distanceOp = this.rDistance;
		return distanceOp;
	}
	rTypeOpt() {
		let typeOp = this.rType;
		return typeOp;
	}
	halalOpt() {
		let halalOp = this.halal;
		return halalOp;
	}

	//mall
	mDistanceOpt() {
		let distanceOp = this.mDistance;
		return distanceOp;
	}
	mTypeOpt() {
		let typeOp = this.mType;
		return typeOp;
	}

	//attraction
	aDistanceOpt() {
		let distanceOp = this.aDistance;
		return distanceOp;
	}
	aFeeOpt() {
		let rateOp = this.aFee;
		return rateOp;
	}

	result() {
		let station = this.stationOpt();
		let choice = this.choiceOpt();

		if (choice == 'Hotel') {
			let distance = this.hDistanceOpt();
			let rate = this.hRateOpt();

			this.navCtrl.push(ResultPage, {
				choice: choice,
				station: station,
				distance: distance,
				rate: rate,
			});
		} else if (choice == 'Restaurant') {
			let distance = this.rDistanceOpt();
			let type = this.rTypeOpt();
			let halal = this.halalOpt();

			this.navCtrl.push(ResultPage, {
				choice: choice,
				station: station,
				distance: distance,
				type: type,
				halal: halal,
			});
		} else if (choice == 'Mall') {
			let distance = this.mDistanceOpt();
			let type = this.mTypeOpt();

			this.navCtrl.push(ResultPage, {
				choice: choice,
				station: station,
				distance: distance,
				type: type,
			});
		} else if (choice == 'Attraction') {
			let distance = this.aDistanceOpt();
			let fee = this.aFeeOpt();

			this.navCtrl.push(ResultPage, {
				choice: choice,
				station: station,
				distance: distance,
				fee: fee,
			});
		}
	}

	reset() {
		this.station = "KL Sentral";
		this.choice = "No";

		this.hDistance = "";
		this.hRate = "";

		this.rDistance = "";
		this.rType = "Any";
		this.halal = true;

		this.mType = "Groceries";
		this.mDistance = "";

		this.aDistance = "";
		this.aFee = "";
	}
}