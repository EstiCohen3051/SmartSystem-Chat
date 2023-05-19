import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Teacher } from 'src/app/Models/Teacher';
import { TeachersService } from 'src/app/Services/teacher/teachers.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.scss']
})
export class ListTeacherComponent implements OnInit {
  dataSource: any[]=[]
  @ViewChild(MatTable, { static: false }) table:any;

  constructor(private teacherService: TeachersService) {
    teacherService.getAllTeacher().subscribe(
      res => {
        this.teacher = res
        this.dataSource = res
      })
  }
  ngOnInit(): void {

  }
  teacher: Teacher[] = new Array<Teacher>()
  applyFilter(event: Event) {
  
    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.dataSource);
    console.log(filterValue);
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource= this.dataSource.filter(item=>item.Teacher_sName.includes(filterValue.trim().toLowerCase()))
    this.table && this.table.renderRows()
    console.log(this.dataSource);

  }
  displayedColumns: string[] = ['name', 'lastName', 'email', 'pass', 'phone', 'address', 'delete',];
  clickedRows = new Set<Teacher>();
  deleteObject(teacher: Teacher) {
    console.log(teacher);
    this.teacherService.deleteTeacher(teacher).subscribe(
      res => {
        alert("delete")
        this.teacherService.getAllTeacher().subscribe(
          res => {
            this.teacher = res
            this.dataSource = res
          })
      }
    )
  }
}
