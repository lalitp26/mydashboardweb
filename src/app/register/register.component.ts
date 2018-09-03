import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  registrationdata = {}
  public user = new User();
  register(){
    console.log(this.user);
  }
}
