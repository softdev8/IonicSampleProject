import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Profile } from '../pages/profile/profile';
import { Messages } from '../pages/messages/messages';
import { MessageDetail } from '../pages/message-detail/message-detail';
import { Feed } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Profile,
    Messages,
    Feed,
    TabsPage,
    MessageDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyApp,
    Profile,
    Messages,
    Feed,
    TabsPage,
    MessageDetail
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, StatusBar, SplashScreen
  ]
})
export class AppModule {}
