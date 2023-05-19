import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable ,NEVER} from 'rxjs';
import { Users } from 'src/app/Models/User';
import { ChatService } from 'src/app/Services/chat/chat.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  arr: string[] = [''];
  friends$: Observable<any> = NEVER;

  form: FormGroup = new FormGroup({
  });
  constructor(private chat: ChatService, public dialogRef: MatDialogRef<AddRoomComponent>, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.friends$ = this.chat.getAllUsers()
    this.form.addControl(
      'friend0', new FormControl('')
    )
  }
  public closeModal(): void {
    this.dialogRef.close();
  }
  pushFriend() {
    this.form.addControl(
      'friend' + this.arr.length, new FormControl('')
    )
    this.arr.push('')

  }
}
