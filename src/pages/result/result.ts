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
  distance: string;
  rate: string;

  d: string;
  r: string;

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
      this.distance = this.navParams.data.distance;
      this.rate = this.navParams.data.rate;
  }
    
  returnList(item){

    if(this.distance.length > 0){
      if(item.hDistance < 100) this.d = "Near";
      else if(100 <= item.hDistance && item.hDistance <= 500) this.d = "Intermediate";
      else if(item.hDistance > 500) this.d = "Far";
      else this.d = "";
    }

    if(this.rate.length > 0){
      if(item.hRate < 100) this.r = "Low";
      else if(100 <= item.hRate && item.hRate <= 250) this.r = "Normal";
      else if(item.hRate > 250) this.r = "High";
      else this.r = "";
    }

    if(this.station.length > 0 && this.distance.length > 0 && this.rate.length > 0){
      if(this.station == item.station && this.distance == this.d && this.rate == this.r) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.distance.length > 0){
      if(this.station == item.station && this.distance == this.d) return true;
      else return false;
    }
    else if(this.station.length > 0 && this.rate.length > 0){
      if(this.station == item.station && this.rate == this.r) return true;
      else return false;
    }
    else if(this.station.length > 0){
      if(this.station == item.station) return true;
      else return false;
    }
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