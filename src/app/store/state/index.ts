import {UsersState} from './users.state';
import {DemoOptionsState} from './demo-options.state';

export interface AppState {
  users: UsersState,
  demoOptions: DemoOptionsState
}
