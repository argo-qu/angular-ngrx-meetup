import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {addNewUser} from '../../store/index.ts/actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form: FormGroup = this.fb.group({
    firstName: [null],
    lastName: [null],
    age: [null]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
  }

  addNewUser(): void {
    this.store.dispatch(addNewUser(this.form.value));
    this.form.reset();
  }
}
