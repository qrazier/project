import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events} from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'klang, selangor';
  end = 'shah alam, selangor';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events: Events) {
	  
  }
  
  ionViewDidLoad(){
    console.log("Hello");
	this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: {lat: 3.134, lng: 101.686}
    });

    this.directionsDisplay.setMap(this.map);
  }
  
  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  
  closeModal(){

    this.viewCtrl.dismiss();
  }

}
