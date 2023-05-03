import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { sendMessage } from 'src/app/Models/sendMessage.interface';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent  {
detailsMessage!:sendMessage
  constructor() { }
  contactForm = new FormGroup({
    fullName :new FormControl(),
    email :new FormControl(),
    phone :new FormControl(),
    message:new FormControl(),
  });
  //detailsMessage?.fullName = this.contactForm.get('fullName')?.value
}
