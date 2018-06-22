import { User } from './models/user-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LocalStorageService {

  private _currentUser: User;
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
    return this._currentUser.isLoggedIn;
  }

  setup() {
    this._currentUser.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
    this._subjectUser.next(this._currentUser);
  }
}
