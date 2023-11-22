import { Pipe, PipeTransform } from '@angular/core';
import { IChatRoom } from 'src/app/Models';
import { AuthService } from 'src/app/Services/auth/auth.service';
import * as _ from 'lodash'

@Pipe({
  name: 'isDisplayRoom'
})
export class IsDisplayRoomPipe implements PipeTransform {
  constructor(private authService: AuthService) {

  }
  transform(room: IChatRoom): boolean {
    //לבדוק למה לא מגיע לי טוב
    console.log(room.createUserId,);
    console.log(room.friends);
    
    console.log( this.authService.getUserId());
    
    console.log(room.friends);
    console.log( this.authService.userEmeil);
    
    
   // console.log( !!(room.createUserId == this.authService.getUserId()) || !!(_.find(room.friends, this.authService.userEmeil)));
    console.log(room.createUserId == this.authService.getEmailUser());
    console.log(_.find(room.friends, this.authService.userEmeil));
    
    return !!(room.createUserId == this.authService.getUserId()) || !!(_.find(room.friends, this.authService.userEmeil));
  }

}
