import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component/app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {UserService} from './providers/user-service';

bootstrap (AppComponent,[ ROUTER_PROVIDERS, UserService]);
