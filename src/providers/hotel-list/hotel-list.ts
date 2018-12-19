import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Hotel } from '../../models/hotel'

@Injectable()
export class HotelListProvider {

  private hotelRef = this.database.list<Hotel>('hotel');
  
  private station = this.database.list<Hotel>('hotel', ref => ref.orderByChild('station')).valueChanges();
  private name = this.database.list<Hotel>('hotel', ref => ref.orderByChild('name')).valueChanges();
  private rate = this.database.list<Hotel>('hotel', ref => ref.orderByChild('hRate')).valueChanges();
  private distance = this.database.list<Hotel>('hotel', ref => ref.orderByChild('hDistance')).valueChanges();

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

  getStation(){
    return this.station;
  }
  getName(){
    return this.name;
  }
  getRate(){
    return this.rate;
  }
  getDistance(){
    return this.distance;
  }
}