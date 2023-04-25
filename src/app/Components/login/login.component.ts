import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../Models/User';
import { UserService } from 'src/app/Services/user/user.service';
//import {FocusMonitor} from '@angular/cdk/a11y';
//import {BooleanInput, coerceBooleanProperty} from '@angular/cdk/coercion';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit,OnDestroy {
  
    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
  a: string=" ";

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  Currentuser: Users | undefined
  
  constructor(private user: UserService, public emailFormControl: FormControl) { 

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  userForm = new FormGroup({
    name: new FormControl(),
    age: new FormControl('20')
}); 
  Login() {
  //  this.user.Login(this.a).subscribe(
    //  res => {
   //     this.Currentuser = res;
       // if (this.Currentuser.Teacher)
        {
        //איזה סוג משתמש ןלפי לנווט 
          //מורה רואה צאט מערכת ועידכון פרטים
          //מנהל רואה את כל המערכת של כל המורים יכול להתנהל בצאטים
          //ולראות מערכת שינויים
          //עי האישור נשלחים אישורים
        }
        //אחרת לכתוב שלא קיים
      }
  //  )
 // }
// 
  onFormSubmit(): void {
    console.log('Name');
} 
  ngOnInit(): void { 

  }
  
  public validEmail() {
        const emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
