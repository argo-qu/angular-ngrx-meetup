import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {addNewUser, addNewUserByApi} from '../../store/actions';
import {selectEffectsEnabled, selectIsLoading} from '../../store/selectors';
import {AppState} from '../../store/state';
import {first, tap} from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  enableEffects$ = this.store.select(selectEffectsEnabled);
  isLoading$ = this.store.select(selectIsLoading);

  form: FormGroup = this.fb.group({
    firstName: [null],
    lastName: [null],
    age: [null]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
  }

  addNewUser(): void {
    const user = this.form.value;

    this.enableEffects$.pipe(
      first(),
      tap((enableEffects) => {
        this.store.dispatch(enableEffects ? addNewUserByApi({user}) : addNewUser({user}));
        this.form.reset();
      }),
    ).subscribe();
  }
}
