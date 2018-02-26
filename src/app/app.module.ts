import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppService } from './app.service';
import { BackButtonService } from './backButton.service';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductDetailsPage } from '../pages/product-details/product-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonProductsComponent } from '../components/ion-products/ion-products';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { QQSDK } from '@ionic-native/qqsdk';
//import {WeChat} from '@ionic-native/wechat'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    IonProductsComponent,
    ProductListPage,
    ProductDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    AboutPage,
    IonProductsComponent,
    ProductListPage,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    BackButtonService,
    ThemeableBrowser,
    QQSDK,
    //WeChat,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
