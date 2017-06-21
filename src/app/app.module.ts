import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//pages
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Settings } from '../providers/settings';
import { TagTokenInput } from '../pages/tag-token-input/tag-token-input';
import { TagInput } from '../pages/tag-input/tag-input';
import { Signature } from '../pages/signature/signature';


import {IonTagsInputModule} from "ionic-tags-input";
import {RlTagInputModule} from 'angular2-tag-input';


// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';

import { SignaturePadModule } from 'angular2-signaturepad';

import { HttpModule } from '@angular/http';

/****************************** DECLARATION*************************************************** */




let appPages = [
  MyApp,
  Home,
  TagTokenInput,
  TagInput,
 Signature
];
export function declarations() {
  return [
    appPages
  ];
}

export function entryComponents() {
  return appPages;
}

export function providers() {
  return [
    StatusBar,
    SplashScreen,
    Settings,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ];
}
/*********************************************************************************/


@NgModule({
   declarations: declarations(),
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    RlTagInputModule,
    IonTagsInputModule,
    Ionic2RatingModule,
    SignaturePadModule
  ],
  bootstrap: [IonicApp],
   entryComponents: entryComponents(),
   providers: providers()
})
export class AppModule {}
