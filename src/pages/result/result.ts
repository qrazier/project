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
    if(item.station != null || item.hDistance != null || item.hRate != null || item.rRate != null){
      if(item.station == this.station && item.hDistance == this.hDistance && item.hRate == this.hRate && item.rRate == this.rRate)
      {  return true;}
      else if(item.station == this.station && item.hDistance == this.hDistance && item.hRate == this.hRate)
      {  return true;}
      else if(item.station == this.station && item.hRate == this.hRate && item.rRate == this.rRate)
      {  return true;}
      else if(item.station == this.station && item.hDistance == this.hDistance && item.rRate == this.rRate)
      {  return true;}
      else if(item.hDistance == this.hDistance && item.hRate == this.hRate && item.rRate == this.rRate)
      {  return true;}
      else if(item.station == this.station && item.hDistance == this.hDistance)
      {  return true;}
      else if(item.station == this.station && item.hRate == this.hRate)
      {  return true;}
      else if(item.station == this.station && item.rRate == this.rRate)
      {  return true;}
      else if(item.hDistance == this.hDistance && item.hRate == this.hRate)
      {  return true;}
      else if(item.hDistance == this.hDistance && item.rRate == this.rRate)
      {  return true;}
      else if(item.hRate == this.hRate && item.rRate == this.rRate)
      {  return true;}
      else if(item.station == this.station)
      {  return true;}
      else if(item.hDistance == this.hDistance)
      {  return true;}
      else if(item.hRate == this.hRate)
      {  return true;}
      else if(item.rRate == this.rRate)
      {  return true;}
    }
    else if(item.mall == this.mall)
      {  return true;}
    else return false;
  }

  map(){
    this.navCtrl.push(MapPage);
  }

  ionViewDidLoad(){
  //this.returnList(item);
  }
}