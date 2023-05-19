import { Pipe, PipeTransform } from '@angular/core';
import { IChatRoom } from 'src/app/Models';
import { AuthService } from 'src/app/Services/auth/auth.service';
import * as _ from 'lodash'

@Pipe({
  name: 'isDisplayRoom'
})
export class IsDisplayRoomPipe implements PipeTransform {
  constructor(private authService:AuthService) {

  }
  transform(room: IChatRoom): boolean {
    return !!(room.createUserId===this.authService.getUserId())||!!(_.find(room.friends,this.authService.userEmeil));
  }

}
