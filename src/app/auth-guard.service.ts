import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()

export class AuthGuardService {
  user = {
    isAdmin: true
  };
  constructor() { }

  checkPermissions() {
    return this.user.isAdmin;
  }
  isLoggedIn() {
    return this.user.isAdmin;
  }
}
