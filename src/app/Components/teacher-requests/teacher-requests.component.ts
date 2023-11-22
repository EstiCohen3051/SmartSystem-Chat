import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequestTeacher } from 'src/app/Models/RequestTeacher';
import { RequestService } from 'src/app/Services/request/request.service';
import { OptimalTeacherComponent } from '../optimal-teacher/optimal-teacher.component';
import { TeacherRequest } from 'src/app/Models/TeacherRequest';
import { forEach } from 'lodash';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { optimalResult } from 'src/app/Models/optimalResult';

@Component({
  selector: 'app-teacher-requests',
  templateUrl: './teacher-requests.component.html',
  styleUrls: ['./teacher-requests.component.scss']
})
export class TeacherRequestsComponent implements OnInit {
  public RequestTeacherArr: RequestTeacher[] = [];
  public OptimalTeacherArr: optimalResult[] = [];
  arrNot: string[] = [];
  @ViewChild("virtualScroll") virtualScroll?: CdkVirtualScrollViewport;
  id: string = '';
  constructor(public requestService: RequestService, public dialog: MatDialog) {
    this.requestService.GetAllRequest().subscribe(res => {
      console.log(res);
      
      res.forEach(element => {
        if (element.Processed == false&&element.Message!="טופלה") {
          this.RequestTeacherArr.push(element);
          console.log(element);
        }

      });
      console.log(this.id);
      // this.RequestTeacherArr = res;
      console.log(this.RequestTeacherArr);
    })
    // this.requestService.getIdTeacher((this.RequestTeacherArr[0].TeacherId).toString()).subscribe(r => {
    //   console.log(r);

    // })
  }
  ngOnInit(): void {
  }
  findTeacher(i: RequestTeacher) {
    this.arrNot.push(i.TeacherId.trim());
    i.IdN = this.arrNot;
    this.requestService.findTeacher(i).subscribe(res => {
      console.log(res);
      console.log(this.OptimalTeacherArr);
      this.openDialog('0ms', '0ms')
    })
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OptimalTeacherComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  rejectionRequest(idr: number) {
    this.requestService.rejectionRequest(idr
    ).subscribe(
      res => {
        if (res == true) {
          alert('הבקשה נדחתה');
          this.requestService.GetAllRequest().subscribe(res => {
            res.forEach(element => {
              if (element.Processed == false && element.Message.trim() != "טופלה") {
                this.RequestTeacherArr.push(element);
                console.log(element);
              }
            })
          })
        }
        else {
          alert("שגיאה");
        }
      }
    )
    //שליחת בודעה למורה המבקש שהבקשה לא נענתה
  }
}
