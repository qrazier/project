import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ResultPage } from '../pages/result/result';
import { MapPage } from '../pages/map/map';
import { AddHotelPage } from '../pages/add-hotel/add-hotel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { User } from '../providers/user/user';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { FIREBASE_CONFIG } from './app.firebase.config';
import { HotelListProvider } from '../providers/hotel-list/hotel-list';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    ResultPage,
    MapPage,
    AddHotelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage,
    ResultPage,
    MapPage,
    AddHotelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    User,
    HotelListProvider
  ]
})
export class AppModule {}