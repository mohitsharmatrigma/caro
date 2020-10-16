import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, IonSlides } from '@ionic/angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { selectcountycode: '', mobilenumber: '' };
  submitted = false;
  toppings:any;
  selectlang:any;

  constructor(
    public userData: UserData,
    public router: Router,
    public menuCtrl: MenuController,
  ) { 
 
    this.login.selectcountycode='';
    this.toppings ='';
    this.selectlang ='';
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.mobilenumber);
      this.router.navigateByUrl('/otp');
    }
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
