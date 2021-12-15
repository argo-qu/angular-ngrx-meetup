import {createSelector} from '@ngrx/store';
import {AppState} from '../state';
import {UsersState} from '../state/users.state';

export const usersFeatureSelector = (state: AppState) => state.users;

export const selectUsersList = createSelector(
  usersFeatureSelector,
  (state: UsersState) => state.users
);

export const selectIsLoading = createSelector(
  usersFeatureSelector,
  (state: UsersState) => state.isLoading
);
