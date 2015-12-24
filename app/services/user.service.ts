import {Injectable} from 'angular2/core';
import {User} from './user';
import {Logger} from './logger.service';

@Injectable()
export class UserService {
    private currentUser;
    
    constructor(private _logger: Logger) {_logger.debug('New instance of user service created!!');}
    
    getCurrentUser(): Promise<User> {
        if(this.currentUser == null) {
            this._logger.debug('Current user is NOT established.');
            this.currentUser =  new User('tanderson','Thomas Anderson');    
        } else {
            this._logger.debug('User is already logged in.');         
        }
         return Promise.resolve(this.currentUser);
    }    
}