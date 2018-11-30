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
	}

	public station: string = "";
	public distance: string = "";
	public rate: string = "";
	choice: string = "No";

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

	result() {
		let choice = this.choiceOpt();
		let station = this.stationOpt();

		if (choice == "Hotel") { }
		else if (choice == "Restaurant") { }
		else if (choice == "Mall") { }
		else { }
				
		let distance = this.distanceOpt();
		let rate = this.rateOpt();

		this.navCtrl.push(ResultPage, {
			station: station,
			distance: distance,
			rate: rate,
		});
	}

	reset() {
		this.station = "KL Sentral";
		this.distance = "";
		this.rate = "";
		this.choice = "No";
	}
}