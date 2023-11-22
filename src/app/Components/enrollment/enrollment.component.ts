import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Teacher } from 'src/app/Models/Teacher';
import { Users } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { TeachersService } from 'src/app/Services/teacher/teachers.service';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})
export class EnrollmentComponent {

  hide = true;
  input: any;
  id: string = '';
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  myGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    address: new FormControl(),
    email1: new FormControl(),
    pass: new FormControl(),
    tel: new FormControl()
  });
  teacherDetails: Teacher | any;

  email: any;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'חובה למלא שדה זה';
    }
    return this.email.hasError('email') ? 'מייל לא תקין' : '';
  }
  constructor(public fb: FormBuilder, public teacherService: TeachersService,public dialog: MatDialog) {
  }

  addTeacher() {
    this.teacherDetails = {
      Teacher_sId: this.myGroup.get('id')?.value,
      Teacher_sName: this.myGroup.get('firstName')?.value,
      Teacher_sAddress: this.myGroup.get('address')?.value,
      Teacher_sLastName: this.myGroup.get('lastName')?.value,
      Teacher_sEmail: this.myGroup.get('email1')?.value,
      Teacher_sPassword: this.myGroup.get('pass')?.value,
      Teacher_sPhone: this.myGroup.get('tel')?.value,
      Status:true
    };

    this.teacherService.AddNewTeacher(this.teacherDetails!).subscribe(res => {
      //הצגת הודעה
      const dialogRef = this.dialog.closeAll();
    })
  }

  israeliIdValid(): boolean {
    this.id = this.myGroup.get('id')?.value;
    if (!/^\d{9}$/.test(this.id)) {
      return false;
    }
    const idDigits = this.id.split("").map(Number);
    const sum = idDigits.reduce((acc, digit, index) => {
      let digitSum = digit * ((index % 2) + 1);
      if (digitSum > 9) {
        digitSum -= 9;
      }
      return acc + digitSum;
    }, 0);

    return sum % 10 === 0;
  }  
}
