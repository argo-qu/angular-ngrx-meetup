import {usersReducer} from './users.reducer';
import {demoOptionsReducer} from './demo-options.reducer';
import {AppState} from '../state';
import {ActionReducerMap} from '@ngrx/store';

export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer,
  demoOptions: demoOptionsReducer
};
