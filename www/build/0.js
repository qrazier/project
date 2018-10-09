webpackJsonp([0],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__result__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultPageModule = /** @class */ (function () {
    function ResultPageModule() {
    }
    ResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__result__["a" /* ResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__result__["a" /* ResultPage */]),
            ],
        })
    ], ResultPageModule);
    return ResultPageModule;
}());

//# sourceMappingURL=result.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, viewCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.start = 'klang, selangor';
        this.end = 'shah alam, selangor';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        console.log("Hello");
        this.initMap();
    };
    ResultPage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 10,
            center: { lat: 3.134, lng: 101.686 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    ResultPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    ResultPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], ResultPage.prototype, "mapElement", void 0);
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"C:\Users\CODEFREAK\IONIC\tourist\src\pages\result\result.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Result</ion-title>\n  <ion-buttons end>\n	<button ion-button icon-only (click)="closeModal()"><ion-icon name="close"></ion-icon></button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n    \n<ion-content padding>\n  <div id="floating-panel">\n    <b>Start: </b>\n    <select [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()">\n      <option value="klang, selangor">Klang</option>\n      <option value="kl sentral, kuala lumpur sentral">KL Sentral</option>\n      <option value="joplin, mo">Joplin, MO</option>\n      <option value="oklahoma city, ok">Oklahoma City</option>\n      <option value="amarillo, tx">Amarillo</option>\n    </select><br>\n    <b>End: </b>\n    <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n      <option value="shah alam, selangor">Shah Alam</option>\n      <option value="stesen monorail imbi, jalan imbi">Imbi</option>\n      <option value="joplin, mo">Joplin, MO</option>\n      <option value="oklahoma city, ok">Oklahoma City</option>\n      <option value="amarillo, tx">Amarillo</option>\n    </select>\n    </div>\n    <div #map id="map"></div>\n</ion-content>'/*ion-inline-end:"C:\Users\CODEFREAK\IONIC\tourist\src\pages\result\result.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _e || Object])
    ], ResultPage);
    return ResultPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=result.js.map

/***/ })

});
//# sourceMappingURL=0.js.map