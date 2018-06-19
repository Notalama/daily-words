import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthGuardService) {}
  canLoad() {
    return this.authService.checkPermissions();
  }
  canActivate() {
    return this.authService.isLoggedIn();
  }
  canActivateChild() {
    return this.authService.isLoggedIn();
  }
}
