import { Component } from '@angular/core';
import { AuthService } from './Services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SendEmailService } from './Services/sendEmail/send-email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front';
  src="./../assets/images/page1.jpg"
email:string = ''
  constructor(private authService: AuthService,private http: HttpClient,public sendEm:SendEmailService) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public singInWithGoogle(){
    this.authService.singInWithGoogle();
  }

  private apiUrl = 'https://localhost:44362/api/SendEmail/SendEmails'; // replace with your API endpoint
  sendEmail() {
    this.sendEm.sendEmail(this.email, "הצטרפות", "המייל הרוצה להצטרף " + this.email).subscribe(
      res => {
        if (res == true)
          alert("המייל נשלח בהצלחה")
        else
          alert("error")
      }
    )
  }
//   sendEmails() {
//   this.sendEmail(this.email,"הצטרפות","המייל הרוצה להצטרף "+this.email)
// }
  // sendEmail(recipient: string, subject: string, message: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const emailData = { recipient, subject, message };
  //   return this.http.post(this.apiUrl, emailData, { headers });
  // }
}
