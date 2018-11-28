import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from 'ionic-angular';

import { MapPage } from '../map/map';
import { RestaurantProvider } from '../../providers/restaurant/restaurant'
import { Observable } from 'rxjs/Observable';
import { Restaurant } from 'models/restaurant';

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  cafeRef$: Observable<Restaurant[]>;
  fastFoodRef$: Observable<Restaurant[]>;
  familyStyleRef$: Observable<Restaurant[]>;
  japaneseRef$: Observable<Restaurant[]>;

  h: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public appCtrl: App,
    private restaurantList: RestaurantProvider) {
      
      this.hotel = navParams.get('hotel');
      this.halal = true;
      this.type = "Any";

      //console.log("hello ", this.hotel.station);
      
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

  public type: string = "";
  public halal = true;
  public hotel: any;

  typeOpt(){
    let typeOp = this.type;
    return typeOp;
  }
  halalOpt(){
    let halalOp = this.halal;
    return halalOp;
  }

  returnStation(item){
    //console.log(item.station);
    if(this.hotel.station == item.station) return true;
    else return false;
  }
  returnHalal(item){
    if(this.halal) this.h = "Yes";
    else this.h = "No";

    if(this.h == item.halal) return true;
    else return false;
  }

  findMap(item){
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNav().push(MapPage, {
      hotel: this.hotel,
      restaurant: item,
      rest: true
    });
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }
}
