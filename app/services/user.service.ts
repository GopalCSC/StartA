import {Injectable} from 'angular2/core';
import {User} from './user.model';
import {Logger} from './logger.service';

@Injectable()
export class UserService {
    private currentUser;
    
    constructor(private _logger: Logger) {_logger.log('New instance of user service created!!');}
    
    getCurrentUser(): Promise<User> {
        if(this.currentUser == null) {
            this._logger.log('Current user is NOT established.');
            this.currentUser =  new User('tanderson','Thomas Anderson');    
        } else {
            this._logger.log('User is already logged in.');         
        }
         return Promise.resolve(this.currentUser);
    }    
}