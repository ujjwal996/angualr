import {Injectable} from '@angular/core';
var Stamplay

@Injectable()
export class UserService{
  getCurrent(){
    return Stamplay.User.currentUser();
  }

  signup(credentials){
    return Stamplay.User.signup(credentials);
  }

  login(credentials){
    return Stamplay.User.login(credentials);
  }

  logout(){
    Stamplay.User.logout(true);
  }
}
