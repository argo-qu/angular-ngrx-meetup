import {Component} from '@angular/core';
import {selectUsersList} from '../../store/selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/state';
import {map} from 'rxjs';
import {User} from '../../typings/interfaces/user.interface';

@Component({
  selector: 'app-users-count',
  templateUrl: './users-count.component.html',
  styleUrls: ['./users-count.component.scss']
})
export class UsersCountComponent {
  usersCount$ = this.store.select(selectUsersList).pipe(map((users: User[]) => users.length));

  constructor(private store: Store<AppState>) {
  }
}
