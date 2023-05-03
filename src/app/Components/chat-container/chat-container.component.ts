import { Component, OnDestroy, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})

export class ChatContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  private userId: string = " ";
  private roomId?: string;
  public rooms$: Observable<Array<IChatRoom>>;
  public messages$?: Observable<Array<IMessage>> = new Observable<Array<IMessage>>;

  constructor(
    private chatService: ChatService,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.rooms$ = this.chatService.getRooms();
    if (activatedRoute.snapshot.url.length > 1) {
      this.roomId = activatedRoute.snapshot.url[1].path;
      this.messages$ = this.chatService.getRoomMessages(this.roomId);
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
    this.subscription.add(
      this.auth
        .getUserDate()
        .pipe(filter(data => !!data))
        .subscribe(user => {
          this.userId = user.uid;
        })
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
      console.log({result});

      this.onAddRoom(result.roomName, this.userId);
      
    });
  }
  public onAddRoom(roomName: string, userId: string) {
    this.chatService.addRoom(roomName, userId);
  }
  public onSendMessage(message: string): void {
    if (this.userId && this.roomId)
      this.chatService.sendMessage(this.userId, message, this.roomId)
  }
}
