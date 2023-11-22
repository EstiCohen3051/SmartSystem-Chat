import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SystemService } from 'src/app/Services/system/system.service';
import { SystemUploadComponent } from '../system-upload/system-upload.component';

@Component({
  selector: 'app-new-system',
  templateUrl: './new-system.component.html',
  styleUrls: ['./new-system.component.scss']
})
export class NewSystemComponent implements OnInit{
  classes: string[] = []
 public s: string = " ";

  constructor(private system: SystemService,public d:MatDialog) { 
    system.getClasses().subscribe(res => {
      this.classes=res
      console.log(res);
      console.log(this.classes);
    })
  }
  ngOnInit(): void {
  
  }
  // openFile() {
  //   window.open('C:', '_blank');
  // }
  saveClass(s:string) {
    this.s = s;
    this.system.cn=s
    this.d.open(SystemUploadComponent, {
      width: '350px',
      height:'250px'
    })
}
 

  // Add(fileInput: HTMLInputElement) {
  //   console.log(fileInput);
  //   //איך בודקים אם לא נבחר קובץ
  //   if (fileInput == null)
  //   {
  //     alert("בחר קובץ")
  //   }
  //   console.log(fileInput.files);
  //   this.system.addNewSystem(
  //     fileInput.files![0]).subscribe(
  //       res => {
  //       }
  //     )
  // }
}