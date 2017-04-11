import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './loginComponent/index';
import { HomeComponent } from './homeComponent/index';
import { AuthGuard } from './_guards/index';
import { UserListComponent} from './userComponent/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path:'users', component:UserListComponent, canActivate:[AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);