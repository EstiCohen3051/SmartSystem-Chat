import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Teacher } from 'src/app/Models/Teacher';
import { TeachersService } from 'src/app/Services/teacher/teachers.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-updating-teacher',
  templateUrl: './updating-teacher.component.html',
  styleUrls: ['./updating-teacher.component.scss']
})
export class UpdatingTeacherComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public teacherService: TeachersService,
    private dialog: MatDialog
  ) {
  }
  isReadOnly = true;
  ngOnInit(): void {
    this.teacherDetails = this.data.teacher1;
  }
  teacherDetails: Teacher | undefined

  updateTeacher() {
    this.teacherService.updateTeacher(this.teacherDetails!).subscribe(res => {
      if (res) {
        const dia = this.dialog.open(MessageComponent, {
          data: { message: "המורה" + this.teacherDetails!.Teacher_sName + " " + this.teacherDetails!.Teacher_sLastName + "עודכן בהצלחה" }
        });
      }
    })
    const dia1 = this.dialog.closeAll();
  }
}
