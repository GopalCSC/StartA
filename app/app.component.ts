import {Component, provide} from 'angular2/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserService} from './services/user.service'; 
import {User} from './services/user.model';

import {
  RouteConfig,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy  
} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";
import {Routes, APP_ROUTES} from './route.config'; 
import {HeroService} from './heroes/hero.service';
@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html',
    providers: [
    UserService,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    HTTP_PROVIDERS]
})
@RouteConfig(APP_ROUTES)
export class AppComponent { 
     showDropdownMenu: boolean;
     title = 'Application';
     routes = Routes;
     currentUser: User;
     
     constructor(private _userService: UserService) {
         this.showDropdownMenu = true;
         _userService.getCurrentUser().then((resp) => this.currentUser = resp);
     }
     
     dropdownHover() {
        this.showDropdownMenu = this.showDropdownMenu == true ? false: true;    
     }     
}


