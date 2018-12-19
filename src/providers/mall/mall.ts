import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Mall } from '../../models/mall'

@Injectable()
export class MallListProvider {

  private mallRef = this.database.list<Mall>('mall', ref => ref.orderByChild('station')).valueChanges();
  constructor(private database: AngularFireDatabase) {

  }

  getMallList(){
    return this.mallRef;
  }
}