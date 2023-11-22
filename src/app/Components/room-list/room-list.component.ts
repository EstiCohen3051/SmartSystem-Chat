import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { IChatRoom } from 'src/app/Models';
import { ChatComponent } from '../chat/chat.component';
import { ChatService } from 'src/app/Services/chat/chat.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { ChatContainerComponent } from '../chat-container/chat-container.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
 
  @Input() rooms: Array<IChatRoom> = [];
  constructor(private service: ChatService
    , public chat: ChatContainerComponent,
  public auth:AuthService) { }
 userid:string=""
  ngOnInit(): void {
 this.userid= this.auth.getEmailUser().toString()
  }
  changeRoom() {
    this.service.isChooseRoom = true;
    if (this.auth.state === 'teacher') {
      console.log(this.auth.state);
      this.chat.flag = false;
    }
    if (this.auth.state === 'manager') {
      this.chat.flag = true;
    }
  }
  

}