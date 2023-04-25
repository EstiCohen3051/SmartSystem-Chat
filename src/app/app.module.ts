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
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';
import { HeaderComponent } from './Components/header/header.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable, throwError } from 'rxjs'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { EnrollmentComponent } from './Components/enrollment/enrollment.component';
import { MatInputModule } from '@angular/material/input';

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
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [MatFormFieldModule, MatInputModule],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() { }
}
