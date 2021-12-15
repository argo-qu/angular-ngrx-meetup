import { Component } from '@angular/core';
import {AppState} from '../../store/state';
import {Store} from '@ngrx/store';
import {selectEntireState, selectIsLoading} from '../../store/selectors';
import {map} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  state$ = this.store.select(selectEntireState).pipe(map((state: AppState) => JSON.stringify(state, null, 2)));
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private store: Store<AppState>) {
  }
}
