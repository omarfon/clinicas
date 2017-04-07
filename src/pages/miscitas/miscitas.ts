import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Login } from '../login/login';

/**
 * Generated class for the Miscitas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-miscitas',
  templateUrl: 'miscitas.html',
})
export class Miscitas {

  miscitas: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public af: AngularFire) {
                window.localStorage.removeItem('user');
                if(!this.isAlreadyLoggedIn()){
                  this.navCtrl.push(Login);
                }
                this.miscitas = af.database.list('/miscitas');
  }
    isAlreadyLoggedIn(){
      let user = window.localStorage.getItem('user');
      return user !==null && user !== undefined;
    }
 

}
