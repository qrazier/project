import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

declare var google;
let map: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  item: any;
  start: any;
  end: any;
  info: string;

  restModal: any;

  rest: boolean;
  showHide: boolean = true;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data.item;
    this.info = this.navParams.data.info;

    this.start = "Monorail " + this.item.station;
    this.end = this.item.name + ', ' + this.item.station;

    if(this.start == "Monorail KL Sentral") {this.start = "4MMQ+54 Kuala Lumpur, Federal Territory of Kuala Lumpur";}
    else if(this.start == "Monorail Imbi") {this.start = "4PV5+4Q Kuala Lumpur, Federal Territory of Kuala Lumpur";}
    else if(this.start == "Monorail Bukit Bintang") {this.start = "4PW6+CH Kuala Lumpur, Federal Territory of Kuala Lumpur";}
    else if(this.start == "Monorail Medan Tuanku") {this.start = "5M5X+PG Kuala Lumpur, Federal Territory of Kuala Lumpur";}
    else if(this.start == "Monorail Chow Kit") {this.start = "5M8X+X9 Kuala Lumpur, Federal Territory of Kuala Lumpur";} 
  }

  ionViewDidLoad() {
    this.initMap();
    this.mapFunc();
  }

  initMap() {
    map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: { lat: 3.134, lng: 101.686 },
      disableDefaultUI: true,
      clickableIcons: false,
    });
  }

  mapFunc() {
    this.directionsDisplay.setMap(map);
    this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
    this.calculateAndDisplayRoute();

  }

  calculateAndDisplayRoute() {
    this.requestDirection(this.start, this.end);
  }

  requestDirection(start: string, end: string) {
    this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'WALKING',
    }, (response: any, status: string) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  direction() {
    if (this.showHide === true) {
      this.showHide = false;
    }
    else {
      this.showHide = true;
    }
  }

  information() {
    let profileModal = this.modalCtrl.create('InformationPage', { item: this.item, info: this.info });
    profileModal.present();
  }
}