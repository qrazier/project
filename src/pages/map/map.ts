import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController, NavParams, Platform } from 'ionic-angular';

declare var google;
let map: any;
//let infowindow: any;
/*let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  hotel: any;
  start: any;
  end: any;

  restModal: any;

  rest: boolean;
  showHide: boolean = true;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.hotel = this.navParams.data.item;
    this.start = "Monorail " + this.hotel.station;
    this.end = this.hotel.name + ', ' + this.hotel.station;

  }

  ionViewDidLoad() {
    console.log("Hello");
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

    /*infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: { lat: 3.13288, lng: 101.6856413 },
      radius: 1000,
      type: ['food']
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          this.createMarkerII(results[i]);
        }
      }
    });*/
  }

  mapFunc() {
    this.directionsDisplay.setMap(map);
    this.directionsDisplay.setPanel(this.directionsPanel.nativeElement);
    this.calculateAndDisplayRoute();

  }

  calculateAndDisplayRoute() {
    //let a = new google.maps.LatLng(3.1348295, 101.68669799999998);
    //let b = new google.maps.LatLng(3.136, 101.68670);

    /*if (this.rest) {
      this.createMarker(a, this.start);
    }
    */
    this.requestDirection(this.start, this.end);
  }

  requestDirection(start, end) {
    this.directionsService.route({
      origin: start,
      destination: end,
      //destination: "3.1348295, 101.68669799999998",
      travelMode: 'WALKING',
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  /*public restaurant() {
    let profileModal = this.modalCtrl.create('RestaurantPage', { hotel: this.hotel });
    profileModal.present();
  }*/

  direction() {
    if (this.showHide === true) {
      this.showHide = false;
    }
    else {
      this.showHide = true;
    }
  }

  /*createMarker(latlng, title) {

    var infoWindow = new google.maps.InfoWindow({ map: map });

    var marker = new google.maps.Marker({
      position: latlng,
      title: title,
      map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
      infoWindow.setContent(title);
      infoWindow.open(this.map, marker);
    });
  }

  createMarkerII(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }*/
}