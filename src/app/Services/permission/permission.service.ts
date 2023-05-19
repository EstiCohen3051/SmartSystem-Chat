import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private router: Router, private auth: AuthService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.auth.state === 'guess' || this.auth.state === 'teacher') {
      this.router.navigateByUrl('no-permission')
      return false
    }
    else return true
  }

}
