import {createSelector} from '@ngrx/store';
import {State} from '../state';
import {UsersState} from '../state/users.state';

export const boilerplateFeatureSelector = (state: State) => state.users;

export const usersListSelector = createSelector(
  boilerplateFeatureSelector,
  (state: UsersState) => state.users
);
