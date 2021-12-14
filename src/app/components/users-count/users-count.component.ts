import {Component} from '@angular/core';
import {usersListSelector} from '../../store/selectors';
import {Store} from '@ngrx/store';
import {State} from '../../store/state';
import {map} from 'rxjs';
import {User} from '../../typings/interfaces/user.interface';

@Component({
  selector: 'app-users-count',
  templateUrl: './users-count.component.html',
  styleUrls: ['./users-count.component.scss']
})
export class UsersCountComponent {
  usersCount$ = this.store.select(usersListSelector).pipe(map((users: User[]) => users.length));

  constructor(private store: Store<State>) {
  }
}
