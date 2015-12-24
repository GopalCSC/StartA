import {HEROES} from './mock-heroes';
import {Hero} from "./hero";
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class HeroService {
 
  constructor(public  http: Http) {
  }

  getTaxYears() {
    // works  => 'http://localhost:8080/api/taxyears'
    //'./app/heroes/mock-tax-years.json'
    return this.http.get('./app/heroes/mock-tax-years.json')
      .map(res => res.json());
  }
  
  getHeroes(): Promise<Hero[]> { return Promise.resolve(HEROES); }
  
  getHero(id: number): Promise<Hero> {    
    return Promise.resolve(HEROES).then((heroes) => {
      for (var hero of heroes) {
        if (hero.id === id) {
          return hero;
        }
      }
    });
  }
}