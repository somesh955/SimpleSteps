import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/index';
import { LoginComponent } from './loginComponent/index';
import { HomeComponent } from './homeComponent/index';
import { UserListComponent, UserDetailComponent, UserAddEditComponent, UserService } from './userComponent/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        UserAddEditComponent,
        UserListComponent,
        UserDetailComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        // providers used to create fake backend
      //  fakeBackendProvider,
      //  MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }