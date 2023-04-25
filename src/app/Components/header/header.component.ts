import { Component, OnInit } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from 'src/app/Services/chat/chat.service';
import { Users } from 'src/app/Models/User';
import { user } from '@angular/fire/auth';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { EnrollmentComponent } from '../enrollment/enrollment.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public TypeUser?: Users;
  email?: string;
  constructor(private chatService: ChatService, private router: Router,
    private autService: AuthService, public dialog: MatDialog) {
    this.isLoggedIn$ = autService.isLoggedIn();
  }

  ngOnInit(): void {

  }

  public LoginWithGoogle(): void {
    this.autService.singInWithGoogle();
  }
  openEnrollment() {
    const dialogRef = this.dialog.open(EnrollmentComponent, {
      width: '550px',
      height:'500px'
    
    });

    dialogRef.afterClosed().subscribe((result) => {
   //   this.onAddRoom(result, this.userId);
    });
  }
  public signOut(): void {
    this.autService.singOut();
  }
  public openSingUp(): void {
    this.router.navigate(['signUp'])

  }
  public onAddUser(displayName: string, email: string, photoURL: string) {
    // this.chatService.addUser()
  }
}
