import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { HotelListProvider } from './../../providers/hotel-list/hotel-list';

import { MapPage } from '../map/map';
import { Hotel } from '../../models/hotel';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  station: string;
  hDistance: string;
  hRate: string;
  rRate: string;
  mall: string;

  hotelRef$: Observable<Hotel[]>;

  params: Object;
  pushPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    private hotelList: HotelListProvider) {
      
      this.pushPage = MapPage;
      
      this.hotelRef$ = this.hotelList
        .getHotelList()
        .snapshotChanges()
        .map(
          changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val(),
            }));
          }
      );

      //get data from user
      this.station = this.navParams.data.station;
      this.hDistance = this.navParams.data.hDistance;
      this.hRate = this.navParams.data.hRate;
      this.rRate = this.navParams.data.rRate;
      this.mall = this.navParams.data.mall;
  }
    
  returnList(item){
    if(this.station.length > 0 && this.hDistance.length > 0 && this.hRate.length > 0 && this.rRate.length > 0){
      if(this.mall == item.mall && this.station == item.station && this.hDistance == item.hDistance && this.hRate == item.hRate && this.rRate == item.rRate) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.hDistance.length > 0 && this.hRate.length > 0){
      if(this.mall == item.mall && this.station == item.station && this.hDistance == item.hDistance && this.hRate == item.hRate) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.hDistance.length > 0 && this.rRate.length > 0){
      if(this.mall == item.mall && this.station == item.station && this.hDistance == item.hDistance && this.rRate == item.rRate) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.hRate.length > 0 && this.rRate.length > 0){
      if(this.mall == item.mall && this.station == item.station && this.hRate == item.hRate && this.rRate == item.rRate) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.hDistance.length > 0 ){
      if(this.mall == item.mall && this.station == item.station && this.hDistance == item.hDistance) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.rRate.length > 0){
      if(this.mall == item.mall && this.station == item.station && this.rRate == item.rRate) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.hRate.length > 0 ){
      if(this.mall == item.mall && this.station == item.station && this.hRate == item.hRate) return true;
      else return false;
    }
    else if(this.station.length > 0 ){
      if(this.mall == item.mall && this.station == item.station) return true;
      else return false;
    }
    else if(this.mall == item.mall) return true;
    else return false;
  }

  map(){
    this.navCtrl.push(MapPage);
  }

  findMap(item){
    this.navCtrl.push(MapPage, {
      item: item
    });
  }
}