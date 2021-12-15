import {Component, Input} from '@angular/core';
import {User} from '../../typings/interfaces/user.interface';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state';
import {removeUser, removeUserByApi} from '../../store/actions/users.actions';
import {selectEffectsEnabled} from '../../store/selectors';
import {first, tap} from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: User | undefined;
  @Input() index: number | undefined;

  constructor(private store: Store<AppState>) {
  }

  removeUser(): void {
    this.store.select(selectEffectsEnabled).pipe(
      first(),
      tap((enableEffects: boolean) => {
        if (this.index !== undefined) {
          this.store.dispatch(
            enableEffects
              ? removeUserByApi({index: this.index})
              : removeUser({index: this.index})
          );
        }
      }),
    ).subscribe();
  }
}
