import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hotel } from 'models/hotel';
import { HotelListProvider } from '../../providers/hotel-list/hotel-list';

/**
 * Generated class for the EditHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-hotel',
  templateUrl: 'edit-hotel.html',
})
export class EditHotelPage {

  hotel: Hotel = {
    name: '',
    station: '',
    hDistance: '',
    hRate: '',
    rRate: '',
    mall: ''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hotelList: HotelListProvider) {
  }

  ionViewDidLoad() {
    this.hotel = this.navParams.get('hotel');
  }

  updateHotel(hotel: Hotel){
    this.hotelList.editHotel(hotel).then(() => {
      this.navCtrl.pop();
    })
  }

  removeHotel(hotel: Hotel){
    this.hotelList.removeHotel(hotel).then(() => {
      this.navCtrl.pop();
    })
  }
}
