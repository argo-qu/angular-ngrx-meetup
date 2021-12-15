import {createReducer, on} from '@ngrx/store';
import {initialState} from '../initial-state';
import {
  addNewUser,
  addNewUserByApi,
  addNewUserByApiFailure,
  addNewUserByApiSuccess,
  removeUser,
  removeUserByApi, removeUserByApiFailure, removeUserByApiSuccess,
} from '../actions';
import {UsersState} from '../state/users.state';
import {removeArrayElement} from '../../utils/remove-array-element.util';

export const usersReducer = createReducer<UsersState>(
  initialState.users,

  // Простое добавление
  on(addNewUser, (state: UsersState, {user}) => ({
    ...state,
    users: state.users.concat(user),
  })),

  // Добавление через API
  on(addNewUserByApi, (state: UsersState) => ({
    ...state,
    isLoading: true
  })),
  on(addNewUserByApiSuccess, (state: UsersState, {user}) => ({
    ...state,
    users: state.users.concat(user),
    isLoading: false
  })),
  on(addNewUserByApiFailure, (state: UsersState) => ({
    ...state,
    isLoading: false
  })),

  // Простое удаление
  on(removeUser, (state: UsersState, {index}) => ({
    ...state,
    users: removeArrayElement(state.users, index),
  })),

  // Удаление через API
  on(removeUserByApi, (state: UsersState) => ({
    ...state,
    isLoading: true
  })),
  on(removeUserByApiSuccess, (state: UsersState, {index}) => ({
    ...state,
    users: removeArrayElement(state.users, index),
    isLoading: false
  })),
  on(removeUserByApiFailure, (state: UsersState) => ({
    ...state,
    isLoading: false
  })),

);
