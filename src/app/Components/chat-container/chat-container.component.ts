import { Component, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { IChatRoom, IMessage } from 'src/app/Models';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { ChatService } from 'src/app/Services/chat/chat.service';
import { AddRoomComponent } from '../add-room/add-room.component';
import 'rxjs/add/observable/of';
import { Observable, throwError } from 'rxjs'
import { filter } from 'rxjs/operators';
import { MessageComponent } from '../message/message.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { forEach } from 'lodash';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})

export class ChatContainerComponent implements OnInit, OnDestroy {
  @ViewChild("virtualScroll") virtualScroll?: CdkVirtualScrollViewport;
  private subscription: Subscription = new Subscription();
  private userId: string = " ";
  private roomId?: string;
  public rooms$: Observable<Array<IChatRoom>>;
  public messages$?: Observable<Array<IMessage>> = new Observable<Array<IMessage>>;
  messages: any = []
  message: any = undefined;
  flag: boolean = true;

  public emailUser: string = '';
  constructor(private datePipe: DatePipe,
    private chatService: ChatService,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    const  options = { month: 'short', day: 'numeric', year: 'numeric' };

    this.rooms$ = this.chatService.getRooms();
    if (activatedRoute.snapshot.url.length > 1) {
      this.roomId = activatedRoute.snapshot.url[1].path;
      this.chatService.getRoomMessages(this.roomId).subscribe(res => {
        this.messages = res
      });
    }
    this.subscription.add(
      router.events.pipe(filter(data => data instanceof NavigationEnd))
        .subscribe((data) => {
          const routeEvent: RouterEvent = data as RouterEvent;
          const urlArr = routeEvent.url.split("/");
          if (urlArr.length > 2) {
            this.messages$ = this.chatService.getRoomMessages(urlArr[2]);
          }
        })
    )

  }
  ngOnInit(): void {
    if (this.auth.state === 'teacher') {
      console.log(this.auth.state);
      this.flag = false;
    }
    if (this.auth.state === 'manager') {
      this.flag = true;
    }

    this.subscription.add(
      this.auth
        .getUserDate()
        .pipe(filter(data => !!data))
        .subscribe(user => {
          this.userId = user.uid;
          console.log(user.uid);
        }
        )
    );
    this.subscription.add(
      this.router.events
        .pipe(
          filter(ruoterEvent =>
            ruoterEvent instanceof ActivationEnd))
        .subscribe(data => {
          const routerEvent = data as ActivationEnd;
          this.roomId = routerEvent.snapshot.paramMap.get("roomId") || "";
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  public openAddRoomModal(): void {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onAddRoom(result.roomName, this.userId, result.friends);
    });
  }
  public onAddRoom(roomName: string, userId: string, friends: string[]) {
    console.log(userId);

    this.chatService.addRoom(roomName, userId, Object.values(friends));
  }
  public getEmailUser() {
    this.emailUser = this.auth.getEmailUser();
  }
  public onSendMessage(message: string): void {
    if (this.userId && this.roomId)
      this.chatService.sendMessage(this.userId, message, this.roomId);
    this.chatService.Send(message, this.userId = this.auth.getEmailUser()).subscribe(res => {
      this.chatService.r = res
      if (res.length == 0) {
        this.message = " ההודעה לא הובנה אנא נסה שוב";
      }
      else {
        if (res[0].dateAbsence.toString() == '01/01/0001') 
        this.message = "הכנס זמן העדרות ברור יותר"
      else if (res[0].typeAbsence == " ")
        this.message = "הכנס סוג העדרות ברור יותר"
      else if (res[0].lessonAbsence == null && res[0].dateAbsence.toString() != " " && res[0].typeAbsence != " ")
        this.message = "לא נמצאו שיעורים מהם ביקשת להעדר";
     
      }
      if (res.length != 0) {
        this.message = "סוג העדרות:  " + res[0].typeAbsence + "\n"
        res.forEach(element => {
         
          this.message += "בתאריך: " +  this.datePipe.transform(element.dateAbsence, 'MM dd') + "\n" + " לשיעורים " + element.lessonAbsence + "\n"
        });
        console.log(res);
      }
    })
  }
  getUserId() {
    // if (this.auth.state == 'teacher')
    //   return false;
  }
}
