import {User} from '../../typings/interfaces/user.interface';

export interface UsersState {
  users: User[];
  isLoading: boolean;
}
