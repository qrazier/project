import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MapPage } from '../map/map';
import { RestaurantProvider } from '../../providers/restaurant/restaurant'
import { Observable } from 'rxjs/Observable';
import { concat } from 'rxjs/operators';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController,
    private restaurantList: RestaurantProvider) {
      
      this.halal = true;
      this.type = "Any";
      
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

  typeOpt(){
    let typeOp = this.type;
    return typeOp;
  }
  halalOpt(){
    let halalOp = this.halal;
    return halalOp;
  }

  result(){
		let type = this.typeOpt();
		let halal = this.halalOpt();
				
		this.navCtrl.push(MapPage, {
			type: type,
			halal: halal,
		});
  }

  public closeModal(){
    this.viewCtrl.dismiss();
  }

  

}
