import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Classes } from 'src/app/Models/Classes';
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { options: Classes[] },
    private dialogRef: MatDialogRef<ClassesComponent>
  ) { }

  onOptionSelected(option: string): void {
    console.log('האפשרות שנבחרה: ', option);
    this.dialogRef.close(option); // Close the dialog and return the selected option.
  }

  onDialogClose(): void {
    this.dialogRef.close(); // Close the dialog without selecting any option.
  }
      
    

}
