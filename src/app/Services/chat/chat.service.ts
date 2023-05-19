import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IChatRoom, IMessage } from 'src/app/Models';
import { Users } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    private _db: AngularFirestore,
    private httpClient: HttpClient
  ) { }
  onSendMessage(message: string, userId: string) {
    return this.httpClient.get<IMessage>(
      `https://localhost:44362/api/getMessage/getMessage/${message}/${userId}`)
  }


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
    this._db.collection('rooms').doc(id).collection('messages').add({
      body,
      userId,
      timestamp: new Date().getTime(),
    })
  }

  public Send(m:string)
  {
    return this.httpClient.get(`https://localhost:44362/api/Messages/SendMessage?m=${m}`)
  }
}
