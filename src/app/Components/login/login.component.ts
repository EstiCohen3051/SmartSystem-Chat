import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // email = '@gmail.com';
  // pass = '121111';
  constructor(private user: UserService,public emailFormControl:FormControl) { }
  Login() {
  //  this.user.Login(this.email, this.pass);
  }
  ngOnInit(): void { 

  }
  
  public validEmail() {
 const emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
