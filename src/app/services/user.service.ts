import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../typings/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      user
    });
  }

  removeUser(index: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${index}`);
  }
}
