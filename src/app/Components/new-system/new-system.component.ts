import { Component } from '@angular/core';
import { SystemService } from 'src/app/Services/system/system.service';

@Component({
  selector: 'app-new-system',
  templateUrl: './new-system.component.html',
  styleUrls: ['./new-system.component.scss']
})
export class NewSystemComponent {
  constructor(private Ser: SystemService) { }
  openFile() {
    window.open('C:', '_blank');
    console.log("esti");

  }

  Add(fileInput: HTMLInputElement) {
    alert("kk")
    console.log(fileInput.files);
    
    this.Ser.addNewSystem(
      fileInput.files![0]).subscribe(
        res => {
          alert("pp")
        }
      )
  }
}
