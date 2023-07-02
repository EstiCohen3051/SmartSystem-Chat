import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SystemService } from 'src/app/Services/system/system.service';

@Component({
  selector: 'app-system-upload',
  templateUrl: './system-upload.component.html',
  styleUrls: ['./system-upload.component.scss']
})
export class SystemUploadComponent {
  constructor(private system: SystemService, private snackBar: MatSnackBar) { }
  Add(fileInput: HTMLInputElement) {
    console.log(fileInput);
    //איך בודקים אם לא נבחר קובץ
    if (fileInput == null) {
      alert("בחר קובץ")
    }
    console.log(fileInput.files);
    this.system.addNewSystem(
      fileInput.files![0]).subscribe(
        res => {
          this.snackBar.open('המערכת עלתה בהצלחה', 'סגור', {
            duration: 2000000, // משך ההודעה במילישניות
          })
        }
    )
    close();
  }
}
