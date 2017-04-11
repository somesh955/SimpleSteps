import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/index';
import { User,Post } from '../_models/index';
import { AppSettings } from '../app.settings';

@Injectable()
export class UserService {
    
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({'Content-Type': 'application/json', 'authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({headers: headers});
        return this.http.get(AppSettings.API_ENDPOINTS+'/users', options).map((response: Response) => response.json());
    }

    getUserInfo(user_id:string) : Observable<User>{
        // add authorization header with jwt token
        let headers = new Headers({'Content-Type': 'application/json', 'authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({headers: headers});
        return this.http.get(AppSettings.API_ENDPOINTS+'/users/'+user_id,options).map((response:Response) => response.json())
    }
    
    createUser(user:User):Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(user);
        return this.http.post('/users/', body, options).map((response: Response) => response.json());
    }

    updateUser(user:User) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(user);
        return this.http.put('/users/' + user._id, body, options).map((response: Response) => response.json());
    }

    deleteUser(user_id:string) {
        let headers = new Headers({ 'Content-Type': 'application/json',  'authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.delete('/users/' + user_id, headers).map((response: Response) => response.json());;
    }
}