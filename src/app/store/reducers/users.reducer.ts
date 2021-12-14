import {createReducer, on} from '@ngrx/store';
import {initialState} from '../initial-state.const';
import {addNewUser, removeUser} from '../index.ts/actions';
import {UsersState} from '../state/users.state';
import {removeArrayElement} from '../../utils/remove-array-element.util';

export const usersReducer = createReducer<UsersState>(
  initialState.users,
  on(addNewUser, (state: UsersState, {firstName, lastName, age}) => ({
    ...state,
    users: [...state.users, {firstName, lastName, age}],
  })),
  on(removeUser, (state: UsersState, {index}) => ({
    ...state,
    users: removeArrayElement(state.users, index),
  })),
);
