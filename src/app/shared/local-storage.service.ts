import { User } from './models/user-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LocalStorageService {

  _currentUser: User;
  private _subjectUser: BehaviorSubject<User>;
  currentUser: Observable<User>;
  constructor() {
    this._subjectUser = new BehaviorSubject<User>({
      firstName: '',
      lastName: '',
      age: 0,
      rank: '',
      isLoggedIn: false
    });
    this.currentUser = this._subjectUser.asObservable();
    this.setup();
  }

  isLoggedIn(): boolean {
    return this._currentUser ? this._currentUser.isLoggedIn : false;
  }

  setup() {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
    if (this._currentUser) {
      this._currentUser.isLoggedIn = loggedIn;
    }
    this._subjectUser.next(this._currentUser);
  }
}
