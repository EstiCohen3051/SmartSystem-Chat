import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IChatRoom, IMessage } from 'src/app/Models';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private _db: AngularFirestore) { }
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

  // public addRoom(roomName: string, userId: string): void {
  //   this._db.collection("rooms").add({
  //     roomName,
  //     createUserId: userId,
  //   })
  // }
  // public sendMessage(userId: string, body: string, roomId: string): void {
  //   this._db.collection('rooms').doc(roomId).collection('messages').add({
  //     body,
  //     userId,
  //     timestamp: new Date().getTime(),
  //   })

  // }
}
