import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Signup } from '../signup/signup';


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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public element: ElementRef,
              
              ) { }
  ngOnInit(){
    var root = this.element.nativeElement;
    console.log(root);
    var loginBtn = root.querySelector('#loginBtn');
    loginBtn.addEventListener('click',this.onClick.bind(this))  
  }
  onClick(e){
      console.log('logging in');
      this.navCtrl.pop();
  }
  goToperfilpage() {
    this.navCtrl.push(Signup);
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

