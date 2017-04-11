import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../../_models/index';
import { UserService } from '../../userComponent/user.service';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    templateUrl: 'useraddedit.component.html'
})

export class UserAddEditComponent implements OnInit {   
   
    user:User = null;
    error:any;
    constructor(private router: Router,private userService: UserService) { }

    ngOnInit() {

    }

    createUser(user:User) {
    this.userService.createUser(user).subscribe(
       user => {  this.router.navigate(['/user']); return true;});
    }

    updateUser(user:User) {
    this.userService.updateUser(user).subscribe(
       user => { this.router.navigate(['/user']); return true;});
    }

    getUserInfo(user_id:string){
        this.userService.getUserInfo(user_id)
        .subscribe(user => { this.user = user});
    }
}