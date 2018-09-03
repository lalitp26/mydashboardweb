import { Component, OnInit } from '@angular/core';

import { User } from '../classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  

  logindata  = {}

  ngOnInit() {
  }

  public user = new User();

  login(){
    console.log(this.user);
  }
}
