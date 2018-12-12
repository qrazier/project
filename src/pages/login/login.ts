import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ViewController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, private alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  async login(user: User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        this.toast.create({
          message: `Welcome to MyApp, ${user.email}`,
          duration: 3000
          }).present();
          
          this.navCtrl.setRoot('HomePage', {user: user, login: true});
      }, error => {
        let alert = this.alertCtrl.create({
          title: 'Login Error',
          message: error + ' Please try again.',
          buttons: ['OK']
        });
        alert.present();
      })
  }
  
  register(){
	  this.navCtrl.push('RegisterPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}