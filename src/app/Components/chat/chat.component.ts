import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IMessage } from 'src/app/Models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // @ViewChild("virtualScroll") virtualScroll?: CdkVirtualScrollViewport;

  // @Output() onSendMessage: EventEmitter<string> = new EventEmitter();

  // @Input() set messages(messages: Array<IMessage>) {
  //   this._messages = messages.sort((x, y) => {
  //     return x.timestamp - y.timestamp;
  //   });
  //   this.virtualScroll?.scrollToIndex(this._messages.length-1)
  // }
@Input() messages:Array<IMessage>=[]
  // private _messages: Array<IMessage> = [];
  // get messages() {
  //   return this._messages;
  // }
  constructor() { }
  ngOnInit(): void {
    console.log('messages:', this.messages)
  }
  // public sendMessage(message: string, input: HTMLInputElement): void {
  //   //קריאת שרת לסי שארפ
  //   this.onSendMessage.emit(message);
  //   input.value = '';
  // }
  
}
