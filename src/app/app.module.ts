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
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserCardComponent} from './components/user-card/user-card.component';
import {UsersCountComponent} from './components/users-count/users-count.component';
import {reducers} from './store/reducers';
import {DemoOptionsFormComponent} from './components/demo-options-form/demo-options-form.component';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {UserEffects} from './store/effects/user.effects';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [
    AppComponent,
    FormComponent,
    UsersListComponent,
    UserCardComponent,
    UsersCountComponent,
    DemoOptionsFormComponent,
    LoaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
