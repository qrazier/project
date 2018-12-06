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

  d: string;
  r: string;
  h: string;

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
    private mallList: MallListProvider, private attractionList: AttractionListProvider,) {
    //get data from user
    //console.log(this.navParams.data);
    this.choice = this.navParams.data.choice;
    this.station = this.navParams.data.station;
    this.distance = this.navParams.data.distance;
    this.rate = this.navParams.data.rate;
    this.type = this.navParams.data.type;
    this.halal = this.navParams.data.halal;

    if (this.choice == "Hotel") {
      this.hotelRef$ = this.hotelList
        .getHotelList()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );
    }
    else if (this.choice == "Restaurant") {
      this.cafeRef$ = this.restaurantList.getCafeList().snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );

      this.fastFoodRef$ = this.restaurantList.getFastFoodList().snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );

      this.familyStyleRef$ = this.restaurantList.getFamilyStyleList().snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );

      this.japaneseRef$ = this.restaurantList.getJapaneseList().snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );
    }
    else if (this.choice == "Mall") {
      this.mallRef$ = this.mallList
        .getMallList()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );
    }
    else if (this.choice == "Attraction") {
      this.attractionRef$ = this.attractionList
        .getAttractionList()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
        );
    }
  }

  returnList(item) {

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
      if (this.station == item.station && this.distance == this.d) return true;
      else return false;
    }
    else {
      if (this.station == item.station) return true;
      else return false;
    }
  }
  returnHalal(item) {
    if (this.halal) this.h = "Yes";
    else this.h = "No";

    if (this.h == item.halal) return true;
    else return false;
  }

  findMap(item) {
    this.navCtrl.push(MapPage, {
      item: item
    });
  }
}