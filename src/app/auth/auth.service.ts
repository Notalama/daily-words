import { Injectable } from '@angular/core';
import { Credentials } from '../shared/models/credentials';
import { FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
@Injectable()
export class AuthorizationService {

  constructor(
    private firebase: FirebaseApp,
    private router: Router,
    private authGuard: AuthGuardService
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
        this.authGuard.signIn();
        this.router.navigate(['dictionary']);
      }
    ).catch( e => {
      console.log(e);
    });
  }
}
