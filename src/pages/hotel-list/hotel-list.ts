import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Hotel } from '../../models/hotel';
import { Restaurant } from '../../models/restaurant';
import { Mall } from '../../models/mall';
import { Attraction } from '../../models/attraction';

import { HotelListProvider } from '../../providers/hotel-list/hotel-list';
import { MallListProvider } from '../../providers/mall/mall';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { AttractionListProvider } from '../../providers/attraction/attraction';

@IonicPage()
@Component({
  selector: 'page-hotel-list',
  templateUrl: 'hotel-list.html',
})
export class HotelListPage {

  hotelRef$: Observable<Hotel[]>;

  hotelReff$: Observable<Hotel[]>;
  mallRef$: Observable<Mall[]>;
  cafeRef$: Observable<Restaurant[]>;
  ffRef$: Observable<Restaurant[]>;
  familyRef$: Observable<Restaurant[]>;
  japRef$: Observable<Restaurant[]>;
  attractionRef$: Observable<Attraction[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hotelList: HotelListProvider, private mallList: MallListProvider, 
    private restaurantList: RestaurantProvider, private attractionList: AttractionListProvider) {
      this.hotelRef$ = this.hotelList
      .getHotelList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        }
      )
      .map(changes => changes.reverse());

      this.hotelReff$ = this.hotelList.getStation();
      this.mallRef$ = this.mallList.getMallList();
      this.cafeRef$ = this.restaurantList.getCafeList();
      this.ffRef$ = this.restaurantList.getFastFoodList();
      this.familyRef$ = this.restaurantList.getFamilyStyleList();
      this.japRef$ = this.restaurantList.getJapaneseList();
      this.attractionRef$ = this.attractionList.getAttractionList();
  }

  ionViewDidLoad() {
    
  }

}
