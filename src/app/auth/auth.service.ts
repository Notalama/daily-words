import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Credentials } from '../shared/models/credentials';
@Injectable()
export class AuthorizationService {

  constructor(private afAuth: AngularFireAuth) { }

  registerUser(creds: Credentials) {
    console.log(creds);
    // this.afAuth.auth().createUserWithEmailAndPassword(
    //   creds.email, creds.password
    // ).catch(
    //   e => {
    //     console.log(e);
    //   }
    // );
    // const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.put(
    //   'https://udemy-ng-http.firebaseio.com/data.json',
    //   userData
    //   // {headers: headers}
    // );
  }
}
