import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HotelListProvider } from './../../providers/hotel-list/hotel-list';
import { RestaurantProvider } from './../../providers/restaurant/restaurant';
import { MallListProvider } from './../../providers/mall/mall';
import { AttractionListProvider } from './../../providers/attraction/attraction';

import { MapPage } from '../map/map';
import { Hotel } from '../../models/hotel';
import { Restaurant } from '../../models/restaurant';
import { Mall } from '../../models/mall';
import { Attraction } from '../../models/attraction';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  choice: string;
  station: string;
  distance: string;
  rate: string;
  type: string;
  halal: string;
  fee: string;

  d: string;
  r: string;
  t: string;

  displayD: string = 'Void';
  displayR: string = 'Void';

  hotelRef$: Observable<Hotel[]>;
  cafeRef$: Observable<Restaurant[]>;
  fastFoodRef$: Observable<Restaurant[]>;
  familyStyleRef$: Observable<Restaurant[]>;
  japaneseRef$: Observable<Restaurant[]>;
  mallRef$: Observable<Mall[]>;
  attractionRef$: Observable<Attraction[]>;

  params: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private hotelList: HotelListProvider, private restaurantList: RestaurantProvider,
    private mallList: MallListProvider, private attractionList: AttractionListProvider, ) {

    this.displayD = "Void";
    this.displayR = "Void";

    this.choice = this.navParams.data.choice;
    this.station = this.navParams.data.station;

    if (this.choice == "Hotel") {
      this.distance = this.navParams.data.distance;
      this.rate = this.navParams.data.rate;

      if (this.distance == 'Near') this.displayD = 'Below 100m';
      else if (this.distance == 'Intermediate') this.displayD = '100m to 500m';
      else if (this.distance == 'Far') this.displayD = 'Above 500m';

      if (this.rate == 'Low') this.displayR = 'Below RM 100';
      else if (this.rate == 'Normal') this.displayR = 'RM 100 to RM 250';
      else if (this.rate == 'High') this.displayR = 'Above RM 250';

      this.hotelRef$ = this.hotelList.getStation();
    }
    else if (this.choice == "Restaurant") {
      this.distance = this.navParams.data.distance;
      this.type = this.navParams.data.type;
      this.halal = this.navParams.data.halal;

      if (this.distance == 'Near') this.displayD = 'Below 250m';
      else if (this.distance == 'Intermediate') this.displayD = '250m to 1000m';
      else if (this.distance == 'Far') this.displayD = 'Above 1000m';

      this.cafeRef$ = this.restaurantList.getCafeList();
      this.fastFoodRef$ = this.restaurantList.getFastFoodList();
      this.familyStyleRef$ = this.restaurantList.getFamilyStyleList();
      this.japaneseRef$ = this.restaurantList.getJapaneseList();
    }
    else if (this.choice == "Mall") {
      this.distance = this.navParams.data.distance;
      this.type = this.navParams.data.type;

      if (this.distance == 'Near') this.displayD = 'Below 250m';
      else if (this.distance == 'Intermediate') this.displayD = '250m to 500m';
      else if (this.distance == 'Far') this.displayD = 'Above 500m';

      this.mallRef$ = this.mallList.getMallList();
    }
    else if (this.choice == "Attraction") {
      this.distance = this.navParams.data.distance;
      this.fee = this.navParams.data.fee;

      if (this.distance == 'Near') this.displayD = 'Below 100m';
      else if (this.distance == 'Intermediate') this.displayD = '100m to 500m';
      else if (this.distance == 'Far') this.displayD = 'Above 500m';

      if (this.fee == 'Low') this.displayR = 'Below RM 50';
      else if (this.fee == 'Normal') this.displayR = 'Above RM 50';

      this.attractionRef$ = this.attractionList.getAttractionList();
    }
  }

  returnHotel(item) {

    if (this.distance.length > 0) {
      if (item.hDistance < 100) this.d = "Near";
      else if (100 <= item.hDistance && item.hDistance <= 500) this.d = "Intermediate";
      else if (item.hDistance > 500) this.d = "Far";
      else this.d = "";
    }

    if (this.rate.length > 0) {
      if (item.hRate < 100) this.r = "Low";
      else if (100 <= item.hRate && item.hRate <= 250) this.r = "Normal";
      else if (item.hRate > 250) this.r = "High";
      else this.r = "";
    }

    if (this.station.length > 0 && this.distance.length > 0 && this.rate.length > 0) {
      if (this.station == item.station && this.distance == this.d && this.rate == this.r) return true;
      else return false;
    }
    else if (this.station.length > 0 && this.distance.length > 0) {
      if (this.station == item.station && this.distance == this.d) return true;
      else return false;
    }
    else if (this.station.length > 0 && this.rate.length > 0) {
      if (this.station == item.station && this.rate == this.r) return true;
      else return false;
    }
    else if (this.station.length > 0) {
      if (this.station == item.station) return true;
      else return false;
    }
    else return false;
  }

  returnRestaurant(item) {

    if (this.distance.length > 0) {
      if (item.distance < 250) this.d = "Near";
      else if (250 <= item.distance && item.distance <= 1000) this.d = "Intermediate";
      else if (item.distance > 1000) this.d = "Far";
      else this.d = "";
    }

    if (this.distance.length > 0) {
      if (this.station == item.station && this.distance == this.d && this.halal == item.halal) return true;
      else return false;
    }
    else {
      if (this.station == item.station && this.halal == item.halal) return true;
      else return false;
    }
  }

  returnMall(item) {
    if (this.distance.length > 0) {
      if (item.distance < 250) this.d = "Near";
      else if (250 <= item.distance && item.distance <= 500) this.d = "Intermediate";
      else if (item.distance > 500) this.d = "Far";
      else this.d = "";
    }

    if (this.station.length > 0 && this.distance.length > 0 && this.type.length > 0) {
      if (this.station == item.station && this.distance == this.d && this.type == item.type) return true;
      else return false;
    }
    else if (this.station.length > 0 && this.distance.length > 0) {
      if (this.station == item.station && this.distance == this.d) return true;
      else return false;
    }
    else if (this.station.length > 0 && this.type.length > 0) {
      if (this.station == item.station && this.type == item.type) return true;
      else return false;
    }
    else if (this.station.length > 0) {
      if (this.station == item.station) return true;
      else return false;
    }
    else return false;
  }

  returnAttraction(item) {
    if (this.distance.length > 0) {
      if (item.distance < 100) this.d = "Near";
      else if (100 <= item.distance && item.distance <= 500) this.d = "Intermediate";
      else if (item.distance > 500) this.d = "Far";
      else this.d = "";
    }
    if (this.fee.length > 0) {
      if (item.fee < 50) this.r = "Low";
      else this.r = "Normal";
    }

    if (this.station.length > 0 && this.distance.length > 0 && this.fee.length > 0) {
      if (this.station == item.station && this.distance == this.d && this.fee == this.r) return true;
      else return false;
    }
    else if (this.station.length > 0 && this.distance.length > 0) {
      if (this.station == item.station && this.distance == this.d) return true;
      else return false;
    }
    else if (this.station.length > 0 && this.fee.length > 0) {
      if (this.station == item.station && this.fee == this.r) return true;
      else return false;
    }
    else if (this.station.length > 0) {
      if (this.station == item.station) return true;
      else return false;
    }
    else return false;
  }

  findMap(item) {
    this.navCtrl.push(MapPage, {
      item: item,
      info: this.choice,
    });
  }
}