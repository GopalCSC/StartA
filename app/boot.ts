import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Logger}         from './services/logger.service';

bootstrap(AppComponent, [Logger]);