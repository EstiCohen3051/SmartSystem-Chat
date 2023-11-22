import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { FirestoreModule } from '@angular/fire/firestore';
import { MaterialModule } from './material/material.module';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatContainerComponent } from './Components/chat-container/chat-container.component';
import { RoomListComponent } from './Components/room-list/room-list.component';
import { AddRoomComponent } from './Components/add-room/add-room.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DatePipe } from '@angular/common';

import { ChatComponent } from './Components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';
import { HeaderComponent } from './Components/header/header.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { Observable, throwError } from 'rxjs'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EnrollmentComponent } from './Components/enrollment/enrollment.component';
import { MatInputModule } from '@angular/material/input';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { NewSystemComponent } from './Components/new-system/new-system.component';
import { PermanentSystemComponent } from './Components/permanent-system/permanent-system.component';
import { ChangeSystemComponent } from './Components/change-system/change-system.component';
import { UpdatingTeacherComponent } from './Components/updating-teacher/updating-teacher.component';
import { ListTeacherComponent } from './Components/list-teacher/list-teacher.component';
import { IsDisplayRoomPipe } from './Components/room-list/is-display-room.pipe';
import { TeacherRequestsComponent } from './Components/teacher-requests/teacher-requests.component';
import { MessageComponent } from './Components/message/message.component';
import { SystemFillingComponent } from './Components/system-filling/system-filling.component';
import { TeacherSystemComponent } from './Components/teacher-system/teacher-system.component';
import { OptimalTeacherComponent } from './Components/optimal-teacher/optimal-teacher.component';
import { SystemUploadComponent } from './Components/system-upload/system-upload.component';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TeacherRequestThatNotCareComponent } from './Components/teacher-request-that-not-care/teacher-request-that-not-care.component';
import { ClassesComponent } from './Components/classes/classes.component';
import { AddClassComponent } from './Components/add-class/add-class.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatContainerComponent,
    RoomListComponent,
    AddRoomComponent,
    HomeComponent,
    PageNotFoundComponent,
    ChatComponent,
    EnrollmentComponent,
    ContactUsComponent,
    NewSystemComponent,
    PermanentSystemComponent,
    ChangeSystemComponent,
    UpdatingTeacherComponent,
    ListTeacherComponent,
    IsDisplayRoomPipe,
    TeacherRequestsComponent,
    MessageComponent,
    MessageComponent,
    SystemFillingComponent,
    TeacherSystemComponent,
    OptimalTeacherComponent,
    SystemUploadComponent,
    TeacherRequestThatNotCareComponent,
    ClassesComponent,
    AddClassComponent,
  ],
  imports: [
    MatFormFieldModule,
    RouterModule,
    MatInputModule,
    FirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,  
    BrowserModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,

  ],
  exports: [MatFormFieldModule, MatInputModule, IsDisplayRoomPipe],
  providers: [ScreenTrackingService, UserTrackingService,    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() { 
  }
  
}
