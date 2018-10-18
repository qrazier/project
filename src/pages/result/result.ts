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
    
  returnList(){
    if(this.station == 'KL SENTRAL'){
      
    }
  }

  map(){
    this.navCtrl.push(MapPage);
  }
}