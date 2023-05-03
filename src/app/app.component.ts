import { Component } from '@angular/core';
import { AuthService } from './Services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front';
  src="./../assets/images/page1.jpg"

  constructor(private authService: AuthService,private http: HttpClient) { }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public singInWithGoogle(){
    this.authService.singInWithGoogle();
  }
  public doPost() {
    
  }
  private apiUrl = 'https://your-email-service.com/send-email'; // replace with your API endpoint


  sendEmail(recipient: string, subject: string, message: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const emailData = { recipient, subject, message };
    return this.http.post(this.apiUrl, emailData, { headers });
  }
}
