import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { ResultPage } from '../pages/result/result';
import { MapPage } from '../pages/map/map';
//import { AddHotelPage } from '../pages/add-hotel/add-hotel';
//import { EditHotelPage } from '../pages/edit-hotel/edit-hotel';
//import { HotelListPage } from '../pages/hotel-list/hotel-list';

import { User } from '../providers/user/user';
import { HotelListProvider } from '../providers/hotel-list/hotel-list';

@NgModule({
  declarations: [
    MyApp,
    ResultPage,
    MapPage,
    //AddHotelPage,
    //EditHotelPage,
    //HotelListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ResultPage,
    MapPage,
    //AddHotelPage,
    //EditHotelPage,
    //HotelListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    User,
    HotelListProvider,
  ]
})
export class AppModule {}