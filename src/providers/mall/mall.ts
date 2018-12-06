import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Mall } from '../../models/mall'

@Injectable()
export class MallListProvider {

  private mallRef = this.database.list<Mall>('mall');
  constructor(private database: AngularFireDatabase) {

  }

  getMallList(){
    return this.mallRef;
  }

  addMallList(mall: Mall){
    return this.mallRef.push(mall);
  }

  editMall(mall: Mall){
    return this.mallRef.update(mall.key, mall);
  }

  removeMall(mall: Mall){
    return this.mallRef.remove(mall.key);
  }
}