import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IChatRoom, IMessage } from 'src/app/Models';
import { RetMessage } from 'src/app/Models/RetMessage';
import { Users } from 'src/app/Models/User';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class
  ChatService {
  constructor(
    private _db: AngularFirestore,
    private httpClient: HttpClient,
    private auth: AuthService
  ) { }
  onSendMessage(message: string, userId: string) {
    return this.httpClient.get<IMessage>(
      `https://localhost:44362/api/getMessage/getMessage/${message}/${userId}`)
  }
  isChooseRoom: boolean = false

  r: RetMessage | undefined
  arr: Array<IChatRoom> = new Array<IChatRoom>()

  public getRooms(): Observable<Array<IChatRoom>> {
    return this._db
      .collection('rooms')
      .snapshotChanges()
      .pipe(
        map((snaps) => {
          return snaps.map((snap) => {
            const id = snap.payload.doc.id;
            const date: IChatRoom = <IChatRoom>snap.payload.doc.data();
            return <IChatRoom>{
              ...date,
              id,
            };
          })
        })
      );
  }
  public getRoomMessages(roomId: string): Observable<Array<IMessage>> {
    return this._db
      .collection('rooms')
      .doc(roomId)
      .collection("messages")
      .snapshotChanges()
      .pipe(
        map(messages => {
          return messages.map(message => {
            const data: IMessage = <IMessage>message.payload.doc.data();
            return {
              ...data,
              id: message.payload.doc.id,
            }
          })
        })
      );
  }
  public addRoom(roomName: string, userId: string, friends: string[]): void {
    console.log(userId);
    console.log(roomName, friends, userId);

    this._db.collection("rooms").add({
      roomName,
      createUserId: userId,
      friends
    })
  }
  public addUser(displayName: string, email: string, photoURL: string): void {
    this._db.collection("users").add({
      displayName,
      email,
      photoURL: ""
    })
  }
  getAllUsers() {
    return this._db
      .collection('users')
      .snapshotChanges()
      .pipe(
        map(messages => {
          return messages.map(message => {
            const data: Users = <Users>message.payload.doc.data();
            return {
              ...data,
              id: message.payload.doc.id,
            }
          })
        }))
  }
  public sendMessage(userId: string, body: string, id: string): void {
    console.log(userId);
    console.log(body);
    console.log(id);

    this._db.collection('rooms').doc(id).collection('messages').add({
      body,
      userId,
      timestamp: new Date().getTime(),
    })
  }
  public teacherRequest(TeacherId: string, Message: string, Processed: boolean) {
    this._db.collection('request').add(
      {
        TeacherId,
        Message,
        Processed
      }
    )
  }
  public Send(m: string, t: string) {
    return this.httpClient.get<RetMessage>(`https://localhost:44362/api/Messages/SendMessage?m=${m}&t=${t}`)
  }
  public OkMessage(id: string, m: string) {
    id = this.auth.getEmailUser();
    return this.httpClient.post<boolean>(`https://localhost:44362/api/Messages/OkMessage?id=${id}&m=${m}`, this.r);
  }
}
