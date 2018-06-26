import { LocalStorageService } from './shared/local-storage.service';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuardService {

  private rank = 'admin';
  private status: boolean;
  constructor(private ls: LocalStorageService) {}

  checkPermissions() {
    return this.rank === 'admin' ? true : false;
  }

  isLoggedIn() {
    this.ls.status.subscribe(res => {
      this.status = res;
    });
    this.ls.setup();
    return this.status;
  }

}
