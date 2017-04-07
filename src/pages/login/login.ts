import { Component, ElementRef, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  constructor(public af: AngularFire) {}

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }
}
  // ontwitterLogin(e){
  //     console.log('logueate con twitter');
  //     let self=this;
  //     this.af.auth.login({
  //         provider: AuthProviders.Twitter,
  //         method: AuthMethods.Popup
  //     }).then(function(response){
  //         console.log('logueado con twitter satisfactoriamente', response);
  //         let  user = {
  //           email : response.auth.email,
  //           picture : response.auth.photoURL
  //         };
  //         self.navCtrl.pop();
  //     }).catch(function(error){
  //       console.log(error);
  //     });
  // }
  // onFacebookLogin(e){
  //     console.log('logueate con facebook');
  //     let self=this;
  //     this.af.auth.login({
  //         provider: AuthProviders.Facebook,
  //         method: AuthMethods.Popup
  //     }).then(function(response){
  //         console.log('logueando con facebook satisfactoriamente');
  //         let user = {
  //           email:response.auth.email,
  //           picture:response.auth.photoURL
  //         }
  //         window.localStorage.setItem('user',JSON.stringify(user));
  //         self.navCtrl.pop();
  //     }).catch(function(error){
  //       console.log(error);
  //     });
  // }

