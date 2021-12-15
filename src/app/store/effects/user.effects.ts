import {Injectable} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addNewUserByApi,
  addNewUserByApiFailure,
  addNewUserByApiSuccess,
  removeUserByApi, removeUserByApiFailure,
  removeUserByApiSuccess,
} from '../actions';
import {catchError, concatMap, map, mergeMap, of} from 'rxjs';

@Injectable()
export class UserEffects {
  addNewUser$ = createEffect(() => this.actions$.pipe(
    ofType(addNewUserByApi),
    concatMap((action) => this.userService.addUser(action.user).pipe(
      map(() => addNewUserByApiSuccess({user: action.user})),
      catchError((error: any) => of(addNewUserByApiFailure({error})))
    ))
  ));

  removeUser$ = createEffect(() => this.actions$.pipe(
    ofType(removeUserByApi),
    concatMap((action) => this.userService.removeUser(action.index).pipe(
      map(() => removeUserByApiSuccess({index: action.index})),
      catchError((error: any) => of(removeUserByApiFailure({error})))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {
  }
}
