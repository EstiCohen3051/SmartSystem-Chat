import { Component, OnInit } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChatService } from 'src/app/Services/chat/chat.service';
import { Users } from 'src/app/Models/User';
import { user } from '@angular/fire/auth';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { EnrollmentComponent } from '../enrollment/enrollment.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { saveAs } from 'file-saver';
import { RequestService } from 'src/app/Services/request/request.service';
import { RequestTeacher } from 'src/app/Models/RequestTeacher';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public TypeUser?: Users;
  email?: string;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private chatService: ChatService,private http: HttpClient, private router: Router, public requestService: RequestService,
    public autService: AuthService, public dialog: MatDialog) {
    this.isLoggedIn$ = autService.isLoggedIn();

  }
  onTabClick(tabName: string) {
    // Handle tab click event
    console.log('Tab clicked:', tabName);
  }
  public RequestTeacherArr: RequestTeacher[] = []

  $event!: MatTabChangeEvent
  ngOnInit(): void {
    this.requestService.GetAllRequest().subscribe(res => {
      res.forEach(element => {
        if (element.Processed == false) {
          this.RequestTeacherArr.push(element);
        }
      });
    })
  }
  LoginWithGoogle(): void {
    this.autService.singInWithGoogle();
  }
  openEnrollment() {
    const dialogRef = this.dialog.open(EnrollmentComponent, {
      width: '550px',
      height: '500px'

    });

    dialogRef.afterClosed().subscribe((result) => {
      //   this.onAddRoom(result, this.userId);
    });
  }
  public signOut(): void {
    localStorage.clear()
    this.autService.singOut();
  }
  public openSingUp(): void {
    this.router.navigate(['signUp'])
  }

  public downloadFile(): void {

    // scripts: ["./node_modules/file-saver/FileSaver.js"]

    // const filePath = "../../environments/aa"
    // const fileName = 'תבנית_מערכת.xlsx';
    // const anchor = document.createElement('a');
    // anchor.href = filePath;
    // anchor.download = fileName;
    // document.body.appendChild(anchor);
    // anchor.click();
    const data = [
      " "
        // Your data array here
      ];
  
      // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      // const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  
      const fileUrl = 'path/to/the/file/aa.xlsx'; 
      const fileName = 'תבנית מערכת.xlsx'; 
      fetch(fileUrl)
        .then((response) => response.blob())
        .then((blob) => saveAs(blob, fileName))
        .catch((error) => console.error('Error downloading the file:', error));
     }

    
  
 
  
  
  
  public onAddUser(displayName: string, email: string, photoURL: string) {
    // this.chatService.addUser()
  }
}
