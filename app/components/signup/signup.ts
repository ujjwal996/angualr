import {Component} from '@angular/core';
import {UserService} from '../../providers/user-service';
import {FormBuilder, ControlGroup} from '@angular/common';

@Component({
    selector:'',
    template:`
      <form [ngFormModel] = "signupForm" (submit)='signupFormSubmitted()'>
        <input ngControl="email" placeholder = "email"><br>
        <input ngControl="password" placeholder = "email">
      <button type='submit'>
    `
})

export class SignupComponent{
  signupForm:ControlGroup;
  constructor(public fb : FormBuilder, public _userservice:UserService){
    this.signupForm = fb.group({
      email:[''],
      password:['']
    });
  }
  signupFormSubmitted(){
    this._userservice.signup(this.signUpForm.value).then((res)=>{
      console.log("submitted");
    }
  );
  }
}
