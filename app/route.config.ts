import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouteDefinition} from 'angular2/router';

export const Routes = {
  dashboard: {path:'/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true, link: ['Dashboard']},
  heroes: {
    path: '/heroes',
    name: 'Heroes', //The name field is the name of the Route. The name must be spelled in PascalCase.
    component: HeroesComponent,
    link: ['Heroes']
  },
  detail: {
    path: '/detail/:id',
    name: 'Detail',
    component: HeroDetailComponent
  }
};

export const APP_ROUTES: RouteDefinition[] =
    Object.keys(Routes).map((name) => Routes[name]);