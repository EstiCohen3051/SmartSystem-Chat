import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { Observable, of as observableOf } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from 'src/app/Services/chat/chat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public router: Router | undefined;
  public isLoggedIn$: Observable<boolean>;

  constructor(private chatService: ChatService,
    private autService: AuthService, public dialog: MatDialog) {
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
  public openSingUp(): void {
    debugger;

    const dialogRef = this.dialog.open(LoginComponent, { width: '500px', });
    dialogRef.afterClosed().subscribe((result) => {
      debugger;
      // this.onAddUser(result,);
    });
  }
  public onAddUser(displayName: string, email: string, photoURL: string) {
   // this.chatService.addUser()
  }
}
