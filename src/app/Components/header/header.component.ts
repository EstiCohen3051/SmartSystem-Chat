import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Observable, of as observableOf } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public isLoggedIn$: Observable<boolean>;
  
  constructor(private autService: AuthService) {
    this.isLoggedIn$ = autService.isLoggedIn();
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
