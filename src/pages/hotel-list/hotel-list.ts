import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Hotel } from '../../models/hotel';
import { HotelListProvider } from '../../providers/hotel-list/hotel-list';

/**
 * Generated class for the HotelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-list',
  templateUrl: 'hotel-list.html',
})
export class HotelListPage {

  hotelRef$: Observable<Hotel[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hotelList: HotelListProvider) {
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
  }

  ionViewDidLoad() {
    
  }

}
