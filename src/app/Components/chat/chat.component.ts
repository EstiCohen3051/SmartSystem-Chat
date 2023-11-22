import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMessage } from 'src/app/Models';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { ChatService } from 'src/app/Services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild("virtualScroll") virtualScroll?: CdkVirtualScrollViewport;
  @Output() onSendMessage: EventEmitter<string> = new EventEmitter();
  @Output() teacherRequest: EventEmitter<string> = new EventEmitter();
  @Input() set messages(messages: Array<IMessage>) {

    this._messages = messages.sort((x, y) => {
      return x.timestamp - y.timestamp;
    });
    this.virtualScroll?.scrollToIndex(this._messages.length - 1);
  }
  @Input() message: any;
  private _messages: Array<IMessage> = [];
  public userId: string;
  m = "";
  a: string = "";
  get messages() {
    return this._messages;
  }
  constructor(private authService: AuthService,public chatService:ChatService,private _snackBar: MatSnackBar) {
    this.userId = authService.getUserId();
  }
  ngOnInit(): void {
    console.log(this.userId)
     this.a=" ההודעה לא הובנה אנא נסה שוב"

  }
  public sendMessage(message: string, input: HTMLInputElement): void {
    console.log(this.messages);
    this.onSendMessage.emit(message);
    console.log(message + " message");
    input.value = "";
    this.m=message
  }
  sendToManager() {
    console.log(this.m);
    
    this.chatService.OkMessage(this.userId,this.m).subscribe(res => {
      console.log(res);
      
      this.message = "";
      this._snackBar.open("ההודעה נשלחה בהצלחה", "סגירה");
    });
  }
  close() {
    this.message=""
  }
}
