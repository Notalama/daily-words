import { LocalStorageService } from './../shared/local-storage.service';
import { Injectable } from '@angular/core';
import { Credentials } from '../shared/models/credentials';
import { FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';
@Injectable()
export class AuthorizationService {

  constructor(
    private firebase: FirebaseApp,
    private router: Router,
    private ls: LocalStorageService
  ) { }

  registerUser(creds: Credentials) {
    this.firebase.auth().createUserWithEmailAndPassword(
      creds.email, creds.password
    ).then( res => {
        res.additionalUserInfo ? this.router.navigate(['auth/sign-in']) : console.log(res);
      }
    ).catch( e => {
      console.log(e);
    });
  }

  signIn(creds: Credentials) {
    this.firebase.auth().signInWithEmailAndPassword(
      creds.email, creds.password
    ).then( res => {
        if (res) {
          this.router.navigateByUrl('/dictionary');
          localStorage.setItem('isLoggedIn', 'true');
          this.ls.setup();
        }
      }
    ).catch( e => {
      console.log(e);
    });
  }

  signOut() {
    localStorage.setItem('isLoggedIn', 'false');
    this.ls.setup();
    this.firebase.auth().signOut();
  }
}
