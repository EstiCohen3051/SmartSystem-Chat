import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { sendMessage } from 'src/app/Models/sendMessage.interface';
import { SendEmailService } from 'src/app/Services/sendEmail/send-email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  detailsMessage!: sendMessage
  emails!: string
  message!: string
  subject!:string
  constructor(public sendService: SendEmailService) { }
  contactForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    message: new FormControl(),
  });

  send() {
    this.emails = this.contactForm.get('email')?.value;
    this.message = this.contactForm.get('message')?.value;
    this.subject = this.contactForm.get('fullName')?.value;
    this.subject += " ";
    this.subject = this.contactForm.get('phone')?.value;
console.log(this.emails,this.message,this.subject);

    this.sendService.sendEmail(this.emails,this.message,"")

    //this.sendService.sendEmail()
  }
  //detailsMessage?.fullName = this.contactForm.get('fullName')?.value
}
