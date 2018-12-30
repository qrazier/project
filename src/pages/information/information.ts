import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { Hotel } from 'models/hotel';
import { Restaurant } from 'models/restaurant';
import { Mall } from 'models/mall';
import { Attraction } from 'models/attraction';


@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  hotelRef$: Observable<Hotel[]>;
  cafeRef$: Observable<Restaurant[]>;
  fastFoodRef$: Observable<Restaurant[]>;
  familyStyleRef$: Observable<Restaurant[]>;
  japaneseRef$: Observable<Restaurant[]>;
  mallRef$: Observable<Mall[]>;
  attractionRef$: Observable<Attraction[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.info = this.navParams.data.info;
    this.item = this.navParams.data.item;

    console.log("Info: " + this.info);
    console.log("Item name: " + this.item.name);
  }

  public info: string;
  public item: any;

  public closeModal(){
    this.viewCtrl.dismiss();
  }
}