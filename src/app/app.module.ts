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
import { StartComponent } from './Components/start/start.component';
import { LoginComponent } from './Components/login/login.component';
import { ChatContainerComponent } from './Components/chat-container/chat-container.component';
import { RoomListComponent } from './Components/room-list/room-list.component';
import { AddRoomComponent } from './Components/add-room/add-room.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import * as nodemailer from 'nodemailer';
import { NewSystemComponent } from './Components/new-system/new-system.component';
import { PermanentSystemComponent } from './Components/permanent-system/permanent-system.component';
import { ChangeSystemComponent } from './Components/change-system/change-system.component';
import { DeleteTeacherComponent } from './Components/delete-teacher/delete-teacher.component';
import { UpdatingTeacherComponent } from './Components/updating-teacher/updating-teacher.component';
import { ListTeacherComponent } from './Components/list-teacher/list-teacher.component';
import { IsDisplayRoomPipe } from './Components/room-list/is-display-room.pipe';
import { TeacherRequestsComponent } from './Components/teacher-requests/teacher-requests.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
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
    DeleteTeacherComponent,
    UpdatingTeacherComponent,
    ListTeacherComponent,
    IsDisplayRoomPipe,
    TeacherRequestsComponent,
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

    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,

  ],
  exports: [MatFormFieldModule, MatInputModule,IsDisplayRoomPipe],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() { }
}
