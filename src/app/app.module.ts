import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';

//paginas de los tabs 
import { Miscitas } from '../pages/miscitas/miscitas';
import { Reservas } from '../pages/reservas/reservas';
import { Misdatos } from '../pages/misdatos/misdatos';
import { Misexamenes } from '../pages/misexamenes/misexamenes';

//paginas tabs y login
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyDabMEGtP4A_8s9nVffaogSAZszCzOxvqw",
    authDomain: "clinicas-e5e1d.firebaseapp.com",
    databaseURL: "https://clinicas-e5e1d.firebaseio.com",
    projectId: "clinicas-e5e1d",
    storageBucket: "clinicas-e5e1d.appspot.com",
    messagingSenderId: "212730103637"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Miscitas,
    Misdatos,
    Misexamenes,
    Login,
    Reservas,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp( firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Miscitas,
    Misexamenes,
    Misdatos,
    Login,
    Reservas,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
