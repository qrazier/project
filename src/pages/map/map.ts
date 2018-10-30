import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  hotel: any;
  start: any;
  end: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotel = this.navParams.data.item;
    this.start = "Monorail " + this.hotel.station;
    this.end = this.hotel.name;
  }

  

  ionViewDidLoad(){
    console.log("Hello");
    this.initMap();
    console.log(this.start);
    console.log(this.end);
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 20,
      center: {lat: 3.134, lng: 101.686},
      disableDefaultUI: true,
      gestureHandling: "none",
      clickableIcons: false,
    });

    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute();
  }
  
  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
