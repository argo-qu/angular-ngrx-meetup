import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {usersListSelector} from '../../store/selectors';
import {State} from '../../store/state';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users$ = this.store.select(usersListSelector);

  constructor(private store: Store<State>) {
  }

}
