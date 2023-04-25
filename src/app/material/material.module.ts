import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


const modules: any = [MatInputModule,MatDatepickerModule,MatNativeDateModule,
  MatFormFieldModule
  , MatIconModule, MatButtonModule, MatDialogModule, ScrollingModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatOptionModule, MatInputModule, MatButtonModule, MatFormFieldModule,
  MatInputModule, MatSelectModule,MatExpansionModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: modules
})
export class MaterialModule { }
