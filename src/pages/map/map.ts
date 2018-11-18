import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController, NavParams} from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  hotel: any;
  start: any;
  end: any;
  
  showHide: boolean = true;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.hotel = this.navParams.data.item;
    this.start = "Monorail " + this.hotel.station;
    this.end = this.hotel.name + ', ' + this.hotel.station;
  }

  ionViewDidLoad(){
    console.log("Hello");
    this.initMap();
    this.mapFunc();
    console.log(this.start);
    console.log(this.end);
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: 3.134, lng: 101.686},
      disableDefaultUI: true,
      clickableIcons: false,
    });
  }

  mapFunc(){
    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
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

  public restaurant(){
    let profileModal = this.modalCtrl.create('RestaurantPage');
    profileModal.present();
  }

  direction(){
    if(this.showHide === true){
      this.showHide = false;
    }
    else{
      this.showHide = true;
    }
  }
}