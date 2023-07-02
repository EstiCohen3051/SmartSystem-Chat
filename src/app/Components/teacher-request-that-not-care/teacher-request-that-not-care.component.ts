import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestTeacher } from 'src/app/Models/RequestTeacher';
import { RequestService } from 'src/app/Services/request/request.service';

@Component({
  selector: 'app-teacher-request-that-not-care',
  templateUrl: './teacher-request-that-not-care.component.html',
  styleUrls: ['./teacher-request-that-not-care.component.scss']
})
export class TeacherRequestThatNotCareComponent {
  public RequestTeacherArr: RequestTeacher[] = []
  constructor(public requestService: RequestService
    , public dialog: MatDialog) {
    this.requestService.GetAllRequest().subscribe(res => {
      res.forEach(element => {
        if (element.Processed||element.Message.trim()=='טופלה') {
          this.RequestTeacherArr.push(element);
        }
      });
    })
  }
  ngOnInit(): void {
  }


}
