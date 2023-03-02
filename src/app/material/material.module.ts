import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';

const modules: any=[MatDialogModule,ScrollingModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports:modules
})
export class MaterialModule { }
