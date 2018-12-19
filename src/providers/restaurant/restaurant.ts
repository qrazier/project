import { Restaurant } from './../../models/restaurant';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RestaurantProvider {

  //private restaurantRef = this.database.list<Restaurant>('restaurant');
  private restaurantRef: any;
  //this.database.list<Mall>('mall', ref => ref.orderByChild('station')).valueChanges();
  constructor(private database: AngularFireDatabase) {
  }

  getCafeList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/Cafe', ref => ref.orderByChild('station')).valueChanges();
    return this.restaurantRef;
  }

  getFamilyStyleList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/FamilyStyle', ref => ref.orderByChild('station')).valueChanges();
    
    return this.restaurantRef;
  }

  getJapaneseList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/Japanese', ref => ref.orderByChild('station')).valueChanges();
    
    return this.restaurantRef;
  }

  getFastFoodList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/FastFood', ref => ref.orderByChild('station')).valueChanges();    
    
    return this.restaurantRef;
  }
}