import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app-root/app.component';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {FormComponent} from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {usersReducer} from './store/reducers/users.reducer';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersCountComponent } from './components/users-count/users-count.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      users: usersReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    AppComponent,
    FormComponent,
    UsersListComponent,
    UserCardComponent,
    UsersCountComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
