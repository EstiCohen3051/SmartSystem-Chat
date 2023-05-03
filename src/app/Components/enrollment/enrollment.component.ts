import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Teacher } from 'src/app/Models/Teacher';
import { Users } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent {

  hide = true;
  // input: any;
  teacherDetails?: Teacher;

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // userForm = new FormGroup({
  //   id: new FormControl(),
  //   // name: new FormControl,
  //   // email: new FormControl('', [Validators.required, Validators.email])

  // });
  myGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormControl(),
    email1: new FormControl(),
    pass: new FormControl(),
    tel:new FormControl()
});

  email: any;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'חובה למלא שדה זה';
    }
    return this.email.hasError('email') ? 'מייל לא תקין' : '';
  }
  constructor(public fb: FormBuilder, public authService: AuthService
  ) {

  }
  openEnrollment() {

  }
  addTeacher() {
    //this.teacherDetails?.Teacher_sId = this.myGroup.get('id')?.value
    console.log(this.myGroup.get('id')?.value);
    console.log(this.myGroup.get('firstName')?.value);
    console.log(this.myGroup.get('address')?.value);
    console.log(this.myGroup.get('lastName')?.value);
    console.log(this.myGroup.get('email1')?.value);
    console.log(this.myGroup.get('pass')?.value);
    console.log(this.myGroup.get('tel')?.value);
    //this.teacherDetails?.Teacher_sEmail = this.myGroup.get('email');
   this.authService.setNewTeacher(this.teacherDetails!)

    // const output = document.getElementById('output');
    // if (output) output.innerHTML = this.email.toString();
    // this.teacherDetails?.Teacher_sEmail=FormControl.
  }
  closeDialog() {
    // <button mat-button mat-dialog-close>Cancel</button>

  }
}
