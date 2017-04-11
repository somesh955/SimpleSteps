import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../userComponent/user.service';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    templateUrl: 'userlist.component.html'
})

export class UserListComponent implements OnInit {    

    users:User[] = []; 
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.getUserList();
    }

    getUserList(){
        this.userService.getUsers()
        .subscribe(users => { this.users = users});
    }
}