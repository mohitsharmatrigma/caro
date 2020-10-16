import { Component, OnInit } from '@angular/core';

import { UserData } from '../providers/user-data';

import { UserOptions } from '../interfaces/user-options_forgot';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  forgotpassword: UserOptions = { email: "" };
  constructor() { }

  ngOnInit() {
  }

}
