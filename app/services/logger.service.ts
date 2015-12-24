import {Injectable} from 'angular2/core';

@Injectable()
export class Logger {
  debug(msg: any)   { console.log(msg); }
  info(msg: any)   { console.log(msg); }
  warn(msg: any)  { console.warn(msg); }
  error(msg: any) { console.error(msg); }
}