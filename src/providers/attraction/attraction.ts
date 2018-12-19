import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Attraction } from '../../models/attraction'

@Injectable()
export class AttractionListProvider {

  private attractionRef = this.database.list<Attraction>('attraction', ref => ref.orderByChild('station')).valueChanges();
  constructor(private database: AngularFireDatabase) {

  }

  getAttractionList() {
    return this.attractionRef;
  }
}