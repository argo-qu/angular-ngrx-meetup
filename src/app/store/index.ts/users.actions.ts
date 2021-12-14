import {createAction, props} from '@ngrx/store';

export const addNewUser = createAction(
  '[User] Add new user',
  props<{
    firstName: string;
    lastName: string;
    age: number;
  }>()
);

export const removeUser = createAction(
  '[User] Remove user',
  props<{
    index: number
  }>()
);
