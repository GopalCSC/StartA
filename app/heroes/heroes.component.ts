import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero.model';
import {Routes} from '../route.config';
import {UserService} from '../services/user.service' 
import {User} from '../services/user.model'

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
  styleUrls: ['app/heroes/heroes.component.css'],
  providers: [HeroService, UserService]
})
export class HeroesComponent {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router, private _userService: UserService) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
    
    //attempt to see if current user is not doing rest call again
    _userService.getCurrentUser().then((resp) => console.log(resp));
    
    //_heroService.getTaxYears().subscribe(res => console.log(res));
  }

  gotoDetail() {
    this._router.navigate(['/' + Routes.detail.name, {id: this.selectedHero.id}]);
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
