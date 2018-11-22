import { Restaurant } from './../../models/restaurant';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class RestaurantProvider {

  //private restaurantRef = this.database.list<Restaurant>('restaurant');
  private restaurantRef: any;
  constructor(private database: AngularFireDatabase) {
  }

  getCafeList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/Cafe');
    return this.restaurantRef;
  }

  getFamilyStyleList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/FamilyStyle');
    
    return this.restaurantRef;
  }

  getJapaneseList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/Japanese');
    
    return this.restaurantRef;
  }

  getFastFoodList(){
    this.restaurantRef = this.database.list<Restaurant>('/restaurant/FastFood');    
    
    return this.restaurantRef;
  }
}