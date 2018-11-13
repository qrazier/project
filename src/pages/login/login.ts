import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
  user = {} as User;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
	try{
		const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
		if(result){
      this.afAuth.authState.subscribe(data => {
        if(data && data.email && data.uid){
          this.toast.create({
          message: `Welcome to MyApp, ${data.email}`,
          duration: 3000
          }).present();
          
			    this.navCtrl.setRoot('HomePage');
        }
        else{
        this.toast.create({
          message: `Could not find authentication details`,
          duration: 3000
          }).present();
        }
      });
		}
	}
	catch(e){
		console.error(e);
	}
  }
  
  register(){
	  this.navCtrl.push('RegisterPage');
  }

}
