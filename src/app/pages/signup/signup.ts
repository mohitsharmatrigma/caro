import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { SignupOptions } from '../../interfaces/signup-options';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: SignupOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
  onLogin() {
    this.router.navigateByUrl('/login');

  }

}
