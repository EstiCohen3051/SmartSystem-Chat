import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(public http:HttpClient) {

    
  }
  sendEmail(email: string, subject: string, content: string) {
    debugger
    return this.http.get<boolean>(`https://localhost:44362/api/SendEmail/SendEmail?email=${email.trim()}&subject=${subject}&content=${content}`);
  }
}
