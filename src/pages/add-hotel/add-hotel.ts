import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Hotel } from '../../models/hotel';
import { HotelListProvider } from './../../providers/hotel-list/hotel-list';
//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-hotel',
  templateUrl: 'add-hotel.html',
})
export class AddHotelPage {

  //creating a new Object
  hotel: Hotel = {
    name: '',
    station: '',
    hDistance: '',
    hRate: '',
    image: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hotelList: HotelListProvider) {

  }

  addHotel(hotel: Hotel){
    this.hotelList.addHotelList(hotel).then(ref => {
      this.navCtrl.pop();
    });
    
  }

}