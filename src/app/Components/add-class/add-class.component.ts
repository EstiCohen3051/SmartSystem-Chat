import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { parse } from 'dotenv';
import { Classes } from 'src/app/Models/Classes';
import { SystemService } from 'src/app/Services/system/system.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {
  constructor(public s: SystemService, public snackBar: MatSnackBar) {

  }
  value = 'א1';
  value1 = '11';
  addC() {
    this.s.addClass(this.value, parseInt(this.value1)).subscribe(
      res => {
        if (res) {
          this.snackBar.open('הכיתה נוספה בהצלחה', 'סגור', {
            duration: 20000, // משך ההודעה במילישניות
          })
        }
        else {
          this.snackBar.open(' שגיאה בהוספת הכיתה', 'סגור', {
            duration: 20000, // משך ההודעה במילישניות
          })
        }
      }
    )
  }
}
