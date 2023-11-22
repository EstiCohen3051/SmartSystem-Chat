import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Day, TimeSystem } from 'src/app/Models/TimeSystem';
import { SystemService } from 'src/app/Services/system/system.service';

@Component({
  selector: 'app-permanent-system',
  templateUrl: './permanent-system.component.html',
  styleUrls: ['./permanent-system.component.scss']
})

export class PermanentSystemComponent {
  public numClass: number = 1;
  days = ['Sunday', 'Monday', 'Thu']
  arr = new Array(6).fill([]);
  long = new Array()
  public classes?: string[];
  public items?: number[];
  public ELEMENT_DATA: TimeSystem[] = []
  constructor(public system: SystemService) {
    system.getClasses().subscribe(res => {
      this.classes = res;
    })
  }

  public showSystem(item: string) {
    this.system.GetTimeForClass(item).subscribe(
      res => {
        this.TimeSystemTable = null;
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
        res.map(item => {
          if (item.Day.toString() == '6') {
            console.log(item);
          }
        })
        res.map((item, index) => {
          if (!this.arr[item.Day].length) {
            this.arr[item.Day] =
              [{ teacherId: item.TeacherId, subject: item.Subject }]
          }
          else {
            this.arr[item.Day] = [...this.arr[item.Day], { teacherId: item.TeacherId, subject: item.Subject }]
          }
          this.long = new Array(10)
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
