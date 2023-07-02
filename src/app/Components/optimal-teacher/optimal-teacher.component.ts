import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { optimalResult } from 'src/app/Models/optimalResult';
import { Teacher } from 'src/app/Models/Teacher';
import { ChatService } from 'src/app/Services/chat/chat.service';
import { RequestService } from 'src/app/Services/request/request.service';

@Component({
  selector: 'app-optimal-teacher',
  templateUrl: './optimal-teacher.component.html',
  styleUrls: ['./optimal-teacher.component.scss'],
})
export class OptimalTeacherComponent {
  OptimalTeachers: optimalResult[] = [];
  a!: optimalResult;
  arrString: string[] = [];
  constructor(private chat: ChatService, public request: RequestService,
    public dialog: MatDialog) {
    request.findTeacher(request.r1).subscribe(res => {
      this.OptimalTeachers = res;
    })
  }

  findOptimalAgain(s: string) {
    this.arrString = this.request.r1.IdN;
    this.arrString.push(s);
    this.request.r1.IdN = this.arrString;
    this.request.findTeacher(this.request.r1).subscribe(
      res => {
        if (res == null) {//if not have teacher that can change
          alert("לא נמצא מורה אופטימלי אנא פנה למורה ממלא מקום")
          this.dialog.closeAll();
        }
        else {
          this.openDialog('3000ms', '1500ms');
        }
      }
    )
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(OptimalTeacherComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  sendMessageToTeacher() {
    //לשלוח למורים את השינויים במערכת

  }
  sendEmailToTeacher() {
    this.request.UpdateChange(this.OptimalTeachers,this.request.r1.IdRequest).subscribe(res => {
      if (res) {
        this.OptimalTeachers.forEach(item => {
          this.chat.getRooms().subscribe(rooms => {
            this.chat.sendMessage(item.Teacher.Teacher_sEmail, item.Teacher.Teacher_sName + ' ' + item.Teacher.Teacher_sLastName +
              '  נבחרה כמורה מחליף/ה לשיעור ' + item.DetailLessons.Subject_ + ' ביום ' + item.DetailLessons.LessonNum_
              + 'המורה', rooms.filter(room => { return !!(room!.friends[0] as string == item!.Teacher!.Teacher_sEmail as string && (room.roomName as string) != 'מורים' as string) })[0].id)
          })
        })
      }
    })
  }
}
