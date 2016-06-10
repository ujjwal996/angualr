import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';
import {UserService} from '../../providers/user-service';
import {AdminComponent} from '../admin/admin';
import {CheckoutComponent} from '../checkout/checkout';
import {ProfileComponent} from '../profile/profile';
import { SignupComponent} from '../signup/signup';
import {LoginComponent} from '../login/login'

@Component({
  selector:'basic-page',
  template : `
  <h1>Basic page this one</h1>
  <h3> Logged in user </h3>
  <ul>
    <li><a [routerLink]='Admin'>Admin</a></li>
    <li><a [routerLink]='Purchase'>Purchases</a></li>
    <li><a [routerLink]='Profile'>Personal Page</a></li>
    <li><a [routerLink]=''>Logout</a></li>
  </ul>
  <h3>Not logged in User</h3>
  <ul>
    <li><a [routerLink]='Login'>Login</a></li>
    <li><a [routerLink]='Signup'>Register new User</a></li>
  </ul>
  `,
  directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/admin' , name:'Admin' , component:AdminComponent},
  {path:'/checkout' , name:'Purchase' , component:CheckoutComponent},
  {path:'/profile' , name:'Profile' , component: ProfileComponent },
  {path:'/login' , name:'Login' , component:LoginComponent, useAsDefault : true},
  {path:'/signup' , name:'Signup' , component: SignupComponent}
])

export class AppComponent{


}
