import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {selectEffectsEnabled} from '../../store/selectors';
import {AppState} from '../../store/state';
import {Subject, takeUntil, tap} from 'rxjs';
import {setEffectsState} from '../../store/actions';

@Component({
  selector: 'app-demo-options-form',
  templateUrl: './demo-options-form.component.html',
  styleUrls: ['./demo-options-form.component.scss']
})
export class DemoOptionsFormComponent implements OnDestroy {

  enableEffects$ = this.store.select(selectEffectsEnabled);
  destroy$ = new Subject();

  form: FormGroup = this.fb.group({
    enableEffects: []
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.updateFormOnEffectsStateChange();
    this.dispatchUpdatesOnFormValueChange();
  }

  updateFormOnEffectsStateChange(): void {
    this.enableEffects$.pipe(
      takeUntil(this.destroy$),
      tap((enableEffects: boolean) => this.form.get('enableEffects')?.setValue(enableEffects))
    ).subscribe();
  }

  dispatchUpdatesOnFormValueChange(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$),
      tap(({enableEffects}) => this.store.dispatch(setEffectsState({enableEffects})))
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
