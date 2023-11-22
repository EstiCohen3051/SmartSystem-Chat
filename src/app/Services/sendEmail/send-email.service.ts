import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(public http:HttpClient) {

    
  }
  sendD(email: string, subject: string, content: string) {
    return this.http.get<boolean>(`https://localhost:44362/api/SendEmail/sendD?email=${email.trim()}&subject=${subject}&content=${content}`);

  }
  sendEmail(email: string, subject: string, content: string) {
    return this.http.get<boolean>(`https://localhost:44362/api/SendEmail/SendEmail?email=${email.trim()}&subject=${subject}&content=${content}`);
  }
}
