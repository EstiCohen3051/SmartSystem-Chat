import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit{
  arr:string[] = ['']
  form:FormGroup=this.formBuilder.group({
    roomName: ['',],
    

  });
  constructor(public dialogRef: MatDialogRef<AddRoomComponent>,private formBuilder:FormBuilder) {
    
   }
  ngOnInit(): void {
    
  }
  public closeModal(): void{
    this.dialogRef.close();
  }
}
