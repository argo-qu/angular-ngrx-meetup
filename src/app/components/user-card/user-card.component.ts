import {Component, Input} from '@angular/core';
import {User} from '../../typings/interfaces/user.interface';
import {Store} from '@ngrx/store';
import {State} from '../../store/state';
import {removeUser} from '../../store/index.ts/users.actions';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: User | undefined;
  @Input() index: number | undefined;

  constructor(private store: Store<State>) {
  }

  removeUser(): void {
    if (this.index !== undefined) {
      this.store.dispatch(removeUser({
        index: this.index
      }))
    }
  }
}
