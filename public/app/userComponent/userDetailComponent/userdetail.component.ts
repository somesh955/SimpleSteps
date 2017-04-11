import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../userComponent/user.service';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    templateUrl: 'userdetail.component.html'
})

export class UserDetailComponent implements OnInit {    

    user:User = null;
    constructor(private userService: UserService) { }

    ngOnInit() {

    }

    getUserInfo(user_id:string){
        this.userService.getUserInfo(user_id)
        .subscribe(user => { this.user = user});
    }
}