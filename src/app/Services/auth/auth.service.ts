import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { IdTokenResult, User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { UserService } from '../user/user.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private IsLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private userDetails$: Subject<User> = new Subject<User>()
  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    const savedUserString = localStorage.getItem('user')
    if (savedUserString != null) {
      this.IsLoggedIn$.next(true)
    }
    afAuth.authState.subscribe(user => {
      if (!!user) {
        this.userDetails$.next(<User>user)
        const userString: string = JSON.stringify(user)
        localStorage.setItem('user', userString)
        this.IsLoggedIn$.next(true)
      } else {
        localStorage.removeItem('user')
        this.IsLoggedIn$.next(false)
      }
    })


  }
  //התחברות עם גוגל- בחירת חשבון
  public singInWithGoogle() {
    //אמורים להוסיף אחרי הפייר בייס  default
    this.authLogin(new firebase.auth.GoogleAuthProvider())
  }
  //יציאה מחשבון מחובר
  public singOut(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user')
      this.router.navigate(["/"])
      this.userDetails$.next(undefined);
    })
  }
  //אם המשתמש מחובר
  public isLoggedIn(): Observable<boolean> {
    return this.IsLoggedIn$.asObservable()
  }
  public getUserDate(): Observable<User>{
    return this.userDetails$.asObservable();
  }
  private authLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider).then(res => {
      this.IsLoggedIn$.next(true);
      this.setUserData(<User>res.user);
      this.router.navigate(['chat'])
    })
  }

  private setUserData(user?: User): Promise<void> | void {
    if (!user) return
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    )

    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true
    })
  }


}



