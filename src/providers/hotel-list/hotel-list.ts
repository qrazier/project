import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Hotel } from '../../models/hotel'

@Injectable()
export class HotelListProvider {

  private hotelRef = this.database.list<Hotel>('hotel');
  constructor(private database: AngularFireDatabase) {
    
  }

  getHotelList(){
    return this.hotelRef;
  }

  addHotelList(hotel: Hotel){
    return this.hotelRef.push(hotel);
  }

  editHotel(hotel: Hotel){
    return this.hotelRef.update(hotel.key, hotel);
  }

  removeHotel(hotel: Hotel){
    return this.hotelRef.remove(hotel.key);
  }
}