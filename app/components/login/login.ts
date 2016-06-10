import {Component} from '@angular/core';
import {FormBuilder,ControlGroup} from '@angular/common';
import {UserService} from '../../providers/user-service';

@Component({
  selector:'user-login',
  template:`
  <form [ngFormModel]='loginForm' (submit)="loginFormSubmit()">
    <input ngControl='email' placeholder="email"><br>
    <input ngControl='password' placeholder="password">
    <button type="submit">Log In</button>
  </form>

  `
})

export class LoginComponent{
  loginForm:ControlGroup;

  constructor(public fb:FormBuilder, public _userservice : UserService){
    this.loginForm = fb.group({
      email:[''],
      password:['']
    });
  }

  loginFormsubmit(){
    this._userservice.login(this.loginForm.value);
  }
}
