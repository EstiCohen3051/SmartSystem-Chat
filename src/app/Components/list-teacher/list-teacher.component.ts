import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Teacher } from 'src/app/Models/Teacher';
import { TeachersService } from 'src/app/Services/teacher/teachers.service';
import { MessageComponent } from '../message/message.component';
import { UpdatingTeacherComponent } from '../updating-teacher/updating-teacher.component';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent implements OnInit {
  dataSource: any[] = []
  @ViewChild(MatTable, { static: false }) table: any;

  constructor(private teacherService: TeachersService, private dialog: MatDialog) {
    teacherService.getAllTeacher().subscribe(
      res => {
        this.teacher = res;
        this.dataSource = res;
      })
  }
  ngOnInit(): void {

  }
  teacher: Teacher[] = new Array<Teacher>()
  applyFilterEmail(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == '') {
      this.teacherService.getAllTeacher().subscribe(
        res => {
          this.teacher = res
          this.dataSource = res
        })
    }
    this.dataSource = this.dataSource.filter(item => item.Teacher_sEmail.includes(filterValue.trim().toLowerCase()))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == '') {
      this.teacherService.getAllTeacher().subscribe(
        res => {
          this.teacher = res
          this.dataSource = res
        })
    }
    this.dataSource = this.dataSource.filter(item => item.Teacher_sName.includes(filterValue.trim().toLowerCase()))
  }
 
  displayedColumns: string[] = ['name', 'lastName', 'email', 'phone', 'address', 'delete', 'update'];
  clickedRows = new Set<Teacher>();
  updateObject(teacher: Teacher) {
    const dia = this.dialog.open(UpdatingTeacherComponent, {
      data: { teacher1: teacher }
    });
  }
  deleteObject(teacher: Teacher) {
    const dia = this.dialog.open(MessageComponent, {
      data: { message: "האם אתה בטוח שברצונך למחוק את המורה:" + teacher.Teacher_sName + " " + teacher.Teacher_sLastName }
    });
    dia.afterClosed().subscribe(result => {
      if (result) {
        this.teacherService.deleteTeacher(teacher).subscribe(
          res => {
            this.teacherService.getAllTeacher().subscribe(
              res => {
                this.teacher = res
                this.dataSource = res
              })
          })
      }
    });

  }
}
