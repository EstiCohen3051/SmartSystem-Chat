import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Route, Router } from '@angular/router';
import { IdTokenResult, User } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Subject, Observable, observable } from 'rxjs';
import { Teacher } from 'src/app/Models/Teacher';
import { Users } from 'src/app/Models/User';
@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private IsLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private userDetails$: Subject<User> = new Subject<User>();
    private userId: string = "";
    
    public userEmeil: string = "";
    public type: any;
    TypeUser: any;
    state: string = 'guess'
    constructor(
        private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
        private router: Router,
        private http: HttpClient,
    ) {
        const savedUserString = localStorage.getItem('user')
        if (savedUserString != null) {
            this.IsLoggedIn$.next(true);
        }
        afAuth.authState.subscribe(user => {
            if (!!user) {
                this.userDetails$.next(<User>user);
                const userString: string = JSON.stringify(user)
                localStorage.setItem('user', userString);
                this.IsLoggedIn$.next(true);
                this.userId = user.uid;
                this.userEmeil = user.email || '{}';
                console.log("email connection" + this.userEmeil);
                this.Connection(this.userEmeil).subscribe(
                    x => {
                        if (x.Manager == null && x.Teacher == null) {
                            alert('guess')
                            this.state = "guess";
                        }
                        else if (x.Manager != null) {
                            this.state = "manager"
                        }
                        else if (x.Teacher != null) {
                            this.state = "teacher"
                            localStorage.setItem('teacher',JSON.stringify(x.Teacher))
                        }
                        console.log(x + "login");
                    }
                )
            } else {
                localStorage.removeItem('user');
                this.IsLoggedIn$.next(false);
            }
        })
    }

    public singInWithGoogle() {
        this.authLogin(new firebase.auth.GoogleAuthProvider());
    }

    public singOut(): Promise<void> {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(["/"]);
            this.userDetails$.next(undefined);
        });
    }

    public isLoggedIn(): Observable<boolean> {
        return this.IsLoggedIn$.asObservable();
    }

    public getUserDate(): Observable<User> {
        return this.userDetails$.asObservable();
    }
    public getUserId(): string {
        return this.userId;
    }
    public getEmailUser(): string {
        return this.userEmeil;
    }
    private authLogin(provider: firebase.auth.AuthProvider) {
        return this.afAuth.signInWithPopup(provider).then(res => {
            this.IsLoggedIn$.next(true);
            this.setUserData(res.user as User);
        })
    }
    private setUserData(user?: User): Promise<void> | void {
        if (!user) return;
        console.log(user.uid);

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
        });
    }
    userEmail(): string {
        return this.userEmail.toString();
    }
    Connection(email: string) {
        console.log(this.userEmeil);
        console.log(email);
        return this.http.get<Users>(
            `https://localhost:44362/api/Login/Login?email=${email}`
        );
    }
}


