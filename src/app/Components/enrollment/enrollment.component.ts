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

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  input: any;
  teacherDetails?: Teacher;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'חובה למלא שדה זה';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  form: FormGroup = new FormGroup({
    tel: new FormControl(),
  });
  constructor(public fb: FormBuilder,public authService:AuthService
    ) {
    this.form = this.fb.group({
      fieldName: ['', Validators.required],
      fieldType: ['', Validators.required],
    });
  }
  openEnrollment() {
    
  }
  addTeacher() {
    this.authService.setNewTeacher(this.teacherDetails!)
    
    // const output = document.getElementById('output');
    // if (output) output.innerHTML = this.email.toString();
   // this.teacherDetails?.Teacher_sEmail=FormControl.
  }
  closeDialog() {
   // <button mat-button mat-dialog-close>Cancel</button>

  }
}
