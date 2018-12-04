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
		this.type = "Any";
		this.halal = true;
	}

	public station: string = "";
	public distance: string = "";
	choice: string = "No";

	//hotel
	public rate: string = "";
	//restaurant
	public type: string = "";
	public halal: boolean;
	//mall

	//tourist_attraction


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

	result() {
		let station = this.stationOpt();
		let choice = this.choiceOpt();
		let distance = this.distanceOpt();
		let rate = this.rateOpt();
		let type = this.typeOpt();
		let halal = this.halalOpt();

		if (choice == "Hotel") { }
		else if (choice == "Restaurant") { }
		else if (choice == "Mall") { }
		else { }

		this.navCtrl.push(ResultPage, {
			choice: choice,
			station: station,
			distance: distance,
			rate: rate,
			type: type,
			halal: halal,
		});
	}

	reset() {
		this.station = "KL Sentral";
		this.distance = "";
		this.rate = "";
		this.choice = "No";
	}
}