import {FORM_DIRECTIVES, ControlGroup,FormBuilder, Validators, AbstractControl, NgIf} from 'angular2/common';
import {Component} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'
import {Hero} from '../heroes/hero'
import {HeroService} from '../heroes/hero.service'
import {Routes} from '../route.config'
import {SSNDirective} from '../ssn/ssn.directive'
import {PainterDirective} from '../painter/painter.directive'
//import {Alert} from 'ng2-bootstrap/ng2-bootstrap' 

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail/hero-detail.component.html',
  styleUrls: ['app/hero-detail/hero-detail.component.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, SSNDirective, NgIf, PainterDirective],
  providers: [HeroService]
})
export class HeroDetailComponent {
  myForm: ControlGroup
  hero: Hero
  routes = Routes
  //name: AbstractControl;

  constructor(private _heroService: HeroService,
              private _routeParams: RouteParams,
              private _router: Router,
              fb: FormBuilder) {
    console.log('HeroDetailComponent.constructor');
    let id = parseInt(_routeParams.get('id'), 10);
    this._heroService.getHero(id).then(hero => {
        this.hero = hero; 
        console.log(hero);
        this.myForm = fb.group({"name": [this.hero.name, Validators.required],
                               "age": [this.hero.age],                               
                               "ssn": [this.hero.ssn, Validators.compose([Validators.required,ssnValidator])]})
                                                              
        //this.name = this.myForm.controls['name']; 
                               
        this.myForm.valueChanges.subscribe({  
                                    next: (value) => {  
                                     console.log("form changed to: ", value);  
                                    }
                                  });   
      });        
  }
  
  onSubmit(frm) {
    console.log(frm)
    console.log(frm.value)
    this._router.navigate(['/' + Routes.heroes.name]);      
  }
}

function ssnValidator(control) {
  if (!control.value.match(/^\d{3}-\d{2}-\d{4}$/)){  
    return {invalidSSN: true};  
  }
}