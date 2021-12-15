import {AppState} from '../state';
import {usersInitialState} from './users.initial-state';
import {demoOptionsInitialState} from './demo-options.initial-state';

export const initialState: AppState = {
  users: usersInitialState,
  demoOptions: demoOptionsInitialState
};
