import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/Models/Teacher';
import { TimeSystem } from 'src/app/Models/TimeSystem';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { SystemService } from 'src/app/Services/system/system.service';

@Component({
  selector: 'app-teacher-system',
  templateUrl: './teacher-system.component.html',
  styleUrls: ['./teacher-system.component.scss']
})
export class TeacherSystemComponent implements OnInit {
  public numClass: number = 1;
  days = ['Sunday', 'Monday', 'Thu']
  arr = new Array(6).fill([]);
  long = new Array()
  public classes?: string[];
  public items?: number[];
  public ELEMENT_DATA: TimeSystem[] = []
  id: string = "";
  teacher:Teacher=JSON.parse(localStorage.getItem('teacher')!)
  constructor(public system: SystemService, public auth: AuthService) {
    this.id = this.teacher.Teacher_sId
    console.log(this.id);
    
  }
  ngOnInit(): void {
    this.system.GetTimeForClass("all").subscribe(
      res => {
        this.TimeSystemTable = res;
        console.log(this.TimeSystemTable);
        res.forEach(element => {
          this.ELEMENT_DATA?.push(element)
        });
        res.forEach((element, index) => {
          this.arr[element.Day] = {
            subject: element.Subject, teacherId: element.TeacherId,ClassName:element.ClassName
          }
        });
        console.log(res);
        res.map((item, index) => {
          if (!this.arr[item.Day].length) {
            this.arr[item.Day] =
              [{ teacherId: item.TeacherId, subject: item.Subject,ClassName:item.ClassName }]
          }
          else {
            this.arr[item.Day] = [...this.arr[item.Day], { teacherId: item.TeacherId, subject: item.Subject,ClassName:item.ClassName }]
          }
          this.long =new Array(10)
           // new Array(Math.max(...this.arr.map(item => +item.length))).fill(0)
        })
      })  }

  public showSystem(item: string) {
    this.system.GetTimeForClass(item).subscribe(
      res => {
        this.TimeSystemTable = res;
        console.log(this.TimeSystemTable);
        res.forEach(element => {
          this.ELEMENT_DATA?.push(element)
        });
        res.forEach((element, index) => {
          this.arr[element.Day] = {
            subject: element.Subject, teacherId: element.TeacherId
          }
        });
        console.log(res);
        res.map((item, index) => {
          if (!this.arr[item.Day].length) {
            this.arr[item.Day] =
              [{ teacherId: item.TeacherId, subject: item.Subject }]
          }
          else {
            this.arr[item.Day] = [...this.arr[item.Day], { teacherId: item.TeacherId, subject: item.Subject }]
          }
          this.long =new Array(10)
           // new Array(Math.max(...this.arr.map(item => +item.length))).fill(0)
        })
      })
  }

  displayedColumns: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  dataSource = this.ELEMENT_DATA;
  TimeSystemTable: TimeSystem[10] = new Array<TimeSystem>()
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //  this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
