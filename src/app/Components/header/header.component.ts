import { Component, OnInit } from '@angular/core';
import { Observable } from '@firebase/util';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // | undefined להוריד את 
   public isLoggedIn$: Observable<boolean> | undefined;
  constructor(private autService: AuthService) {
 //  this.isLoggedIn$ = autService.isLoggedIn();
  }
 
  ngOnInit(): void {

  }
 public LoginWithGoogle(): void {
    this.autService.singInWithGoogle();
  }
  public signOut(): void {
    this.autService.singOut();
  }
}
