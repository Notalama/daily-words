import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()

export class AuthGuardService {

  private rank = 'admin';
  private status: boolean;

  constructor() {
    this.status = localStorage.getItem('isLoggedIn') === 'true' ? true : false;
  }

  checkPermissions() {
    return this.rank === 'admin' ? true : false;
  }

  isLoggedIn() {
    return this.status;
  }

  signIn() {
    localStorage.setItem('isLoggedIn', 'true');
  }
}
