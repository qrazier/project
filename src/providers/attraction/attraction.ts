import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Attraction } from '../../models/attraction'

@Injectable()
export class AttractionListProvider {

  private attractionRef = this.database.list<Attraction>('attraction');
  constructor(private database: AngularFireDatabase) {

  }

  getAttractionList(){
    return this.attractionRef;
  }

  addAttractionList(attraction: Attraction){
    return this.attractionRef.push(attraction);
  }

  editAttraction(attraction: Attraction){
    return this.attractionRef.update(attraction.key, attraction);
  }

  removeAttraction(attraction: Attraction){
    return this.attractionRef.remove(attraction.key);
  }
}