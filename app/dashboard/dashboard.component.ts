import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Hero} from '../heroes/hero';
import {HeroService} from '../heroes/hero.service';
import {StatusComponent, StatusChangeEvent} from "../status/status.component";

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  directives: [CORE_DIRECTIVES, StatusComponent],
  providers: [HeroService]
})
export class DashboardComponent {
  heroes: Hero[];
  ngHeroes: Hero[] = [];

  constructor(private _heroService: HeroService) {
    _heroService.getHeroes().then((resp) => this.heroes = resp);
  }

  onChange(event: StatusChangeEvent, hero: Hero) {
    if (event.status) {
      this.ngHeroes.push(hero);
    } else {
      this.ngHeroes.splice(this.ngHeroes.indexOf(hero), 1);
    }
  }

  get ngHeroesString() { return this.ngHeroes.map((h) => h.name).join(', '); }
}
