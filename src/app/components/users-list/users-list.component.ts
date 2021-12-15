import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectUsersList} from '../../store/selectors';
import {AppState} from '../../store/state';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users$ = this.store.select(selectUsersList);

  constructor(private store: Store<AppState>) {
  }

}
