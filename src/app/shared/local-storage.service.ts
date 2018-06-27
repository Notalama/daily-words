import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LocalStorageService {

  private subjectStatus = new Subject<boolean>();
  status = this.subjectStatus.asObservable();

  constructor() {
    this.setup();
  }

  setup() {
    const status = JSON.parse(localStorage.getItem('isLoggedIn')) || false;
    this.subjectStatus.next(status);
    console.log(status);
  }
}
