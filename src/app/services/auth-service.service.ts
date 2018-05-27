import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthServiceService {
  public user: Observable<firebase.User>;
  constructor(public auth: AngularFireAuth) { }

getAuthStatus(): Observable<firebase.User> {
  return this.auth.authState;
}

getSignIn(): firebase.Promise<any> {
  return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}

getSignOut(): firebase.Promise<any> {
  return this.auth.auth.signOut();
}



}
