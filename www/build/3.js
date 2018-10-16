webpackJsonp([3],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(afAuth, toast, navCtrl, navParams, modalCtrl, events) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.events = events;
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.events.subscribe('searching', function (data) {
            console.log(data);
        });
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: 'Welcome to APP_NAME, ${data.email}',
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: 'Could not find authentication details',
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.stationOpt = function () {
        var stationOp = this.station;
        return stationOp;
    };
    HomePage.prototype.hDistanceOpt = function () {
        var hDistanceOp = this.hDistance;
        return hDistanceOp;
    };
    HomePage.prototype.hRateOpt = function () {
        var hRateOp = this.hRate;
        return hRateOp;
    };
    HomePage.prototype.rRateOpt = function () {
        var rRateOp = this.rRate;
        return rRateOp;
    };
    HomePage.prototype.mallOpt = function () {
        var mallOp = '';
        if (this.mall) {
            mallOp = 'YES';
        }
        else {
            mallOp = 'NO';
        }
        return mallOp;
    };
    HomePage.prototype.result = function () {
        var station = this.stationOpt();
        var hDistance = this.hDistanceOpt();
        var hRate = this.hRateOpt();
        var rRate = this.rRateOpt();
        var mall = this.mallOpt();
        //console.log(station, hDistance, hRate, rRate, mall);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], {
            station: station,
            hDistance: hDistance,
            hRate: hRate,
            rRate: rRate,
            mall: mall
        });
        /*this.navCtrl.push(ResultPage, {
            station: this.station,
            hDistance: this.hDistance,
            hRate: this.hRate,
            rRate: this.rRate,
            mall: this.mall
        });*/
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Qrazier\ionic\project\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Hello Tourist</ion-title>\n\n  </ion-navbar>\n\n  <style>.black{color: black;}</style>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n	<ion-list>\n\n	\n\n	  <ion-item>\n\n			<ion-label class="black">MONORAIL STATIONS</ion-label>\n\n			<ion-select (ionChange)="stationOpt();" [(ngModel)]="station">\n\n				<ion-option value="KL SENTRAL">KL Sentral</ion-option>\n\n				<ion-option value="IMBI">Imbi</ion-option>\n\n				<ion-option value="BUKIT BINTANG">Bukit Bintang</ion-option>\n\n				<ion-option value="MEDAN TUANKU">Medan Tuanku</ion-option>\n\n				<ion-option value="CHOW KIT">Chow Kit</ion-option>\n\n			</ion-select>\n\n	  </ion-item>\n\n\n\n	  <ion-item>\n\n			<ion-label class="black">HOTEL DISTANCE</ion-label>\n\n			<ion-select (ionChange)="hDistanceOpt();" [(ngModel)]="hDistance">\n\n				<ion-option value="NEAR">Near (20m - 100m)</ion-option>\n\n				<ion-option value="INTERMEDIATE">Intermediate (100m - 500m)</ion-option>\n\n				<ion-option value="FAR">Far (> 500m)</ion-option>\n\n			</ion-select>\n\n	  </ion-item>\n\n\n\n	  <ion-item>\n\n			<ion-label class="black">HOTEL RATE (PER NIGHT)</ion-label>\n\n			<ion-select (ionChange)="hRateOpt();" [(ngModel)]="hRate">\n\n				<ion-option value="LOW">Low (<  RM75)</ion-option>\n\n				<ion-option value="NORMAL">Normal (RM 76 - RM 250)</ion-option>\n\n				<ion-option value="HIGH">High (> RM250)</ion-option>\n\n			</ion-select>\n\n	  </ion-item>\n\n	  \n\n	  <ion-item>\n\n			<ion-label class="black">RESTAURANT RATE</ion-label>\n\n			<ion-select (ionChange)="rRateOpt();" [(ngModel)]="rRate">\n\n				<ion-option value="LOW">Below RM 30</ion-option>\n\n				<ion-option value="NORMAL">Between RM 31 & RM 69</ion-option>\n\n				<ion-option value="HIGH">RM 70 and above</ion-option>\n\n			</ion-select>\n\n	  </ion-item>\n\n	  \n\n	  <ion-item>\n\n			<ion-label>SHOPPING MALL</ion-label>\n\n			<ion-toggle (ionChange)="mallOpt();" [(ngModel)]="mall"></ion-toggle>\n\n	  </ion-item>\n\n		\n\n		<ion-row>\n\n			<ion-col style="text-align: center;">\n\n					<button ion-button (click)="result()">Search</button>		\n\n			</ion-col>\n\n				\n\n		</ion-row>\n\n  </ion-list>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Qrazier\ionic\project\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map