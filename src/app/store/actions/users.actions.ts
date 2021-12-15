import {createAction, props} from '@ngrx/store';
import {User} from '../../typings/interfaces/user.interface';

export const addNewUser = createAction(
  '[User] Add new user',
  props<{ user: User }>()
);

export const removeUser = createAction(
  '[User] Remove user',
  props<{ index: number }>()
);

export const addNewUserByApi = createAction(
  '[User] Add new user by API',
  props<{ user: User }>()
);

export const addNewUserByApiSuccess = createAction(
  '[User] Add new user by API - Success',
  props<{ user: User }>()
);

export const addNewUserByApiFailure = createAction(
  '[User] Add new user by API - Failure',
  props<{ error: true }>()
);

export const removeUserByApi = createAction(
  '[User] Remove user By Api',
  props<{ index: number }>()
);

export const removeUserByApiSuccess = createAction(
  '[User] Remove user By Api - Success',
  props<{ index: number }>()
);

export const removeUserByApiFailure = createAction(
  '[User] Remove user By Api - Failure',
  props<{ error: any }>()
);
