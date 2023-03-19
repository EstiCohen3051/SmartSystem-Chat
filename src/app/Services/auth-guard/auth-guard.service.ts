import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  //במקרה שהמשתמש לא כתוב או לא נמצא
  canActivate() {
    return this.authService.isLoggedIn()
      .pipe(
        tap((userIsLoggedIn) => {
          if (!userIsLoggedIn) this.router.navigate(['/']);
        })
      );
  }
}


