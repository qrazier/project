import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  station: string;
  hDistance: string;
  hRate: string;
  rRate: string;
  mall: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events: Events) {
    this.station = this.navParams.data.station;
    this.hDistance = this.navParams.data.hDistance;
    this.hRate = this.navParams.data.hRate;
    this.rRate = this.navParams.data.rRate;
    this.mall = this.navParams.data.mall;
  }
  
  returnList(){
    if(this.station == 'KL SENTRAL'){

    }
  }

  ionViewDidLoad(){
    //console.log("Hello");
  }
}