import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {ScrollingModule} from '@angular/cdk/scrolling';

const modules: any = [MatInputModule,MatDatepickerModule,MatNativeDateModule,
  MatFormFieldModule
  , MatIconModule, MatButtonModule, MatDialogModule, ScrollingModule, MatInputModule, MatFormFieldModule,MatButtonToggleModule, FormsModule, ReactiveFormsModule, MatOptionModule, MatInputModule, MatButtonModule, MatFormFieldModule,
  MatInputModule,MatAutocompleteModule, MatSelectModule,MatExpansionModule,MatMenuModule,MatTabsModule,MatTableModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules  ],
  exports: modules
})
export class MaterialModule { }
