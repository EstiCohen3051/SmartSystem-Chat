import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatContainerComponent } from './Components/chat-container/chat-container.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthGuardService } from './Services/auth-guard/auth-guard.service';
import { EnrollmentComponent } from './Components/enrollment/enrollment.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { PermissionService } from './Services/permission/permission.service';
import { NewSystemComponent } from './Components/new-system/new-system.component';
import { PermanentSystemComponent } from './Components/permanent-system/permanent-system.component';
import { ChangeSystemComponent } from './Components/change-system/change-system.component';
import { TeachersService } from './Services/teacher/teachers.service';
import { UpdatingTeacherComponent } from './Components/updating-teacher/updating-teacher.component';
import { ListTeacherComponent } from './Components/list-teacher/list-teacher.component';
import { SystemFillingComponent } from './Components/system-filling/system-filling.component';
import { TeacherRequestsComponent } from './Components/teacher-requests/teacher-requests.component';
import { TeacherSystemComponent } from './Components/teacher-system/teacher-system.component';
import { TeacherRequestThatNotCareComponent } from './Components/teacher-request-that-not-care/teacher-request-that-not-care.component';
const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   component: AppComponent,
  //   children: [
  //     { path: '', component: StartComponent },
  //     { path: 'Login', component: LoginComponent },
  //   ],
  //   },
  {
    path: "", redirectTo: '/home', pathMatch: 'full'

  },
  {
    path: "chat",
    component: ChatContainerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "newSystem",
    component: NewSystemComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updateTeacher",
    component: UpdatingTeacherComponent,
  },
  {
    path: "listTeacher",
    component: ListTeacherComponent,
  },
  {
    path: "changeSystem",
    component: ChangeSystemComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "permanent-system",
    component: PermanentSystemComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "chat/:roomId",
    component: ChatContainerComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'enrollment',
    component: EnrollmentComponent,
    canActivate: [PermissionService]
  },
  {
    path: 'systemFilling',
    component: SystemFillingComponent,
  },
  {
    path: 'TeacherSystem',
    component: TeacherSystemComponent,
  }
  , {
    path: 'teacherRequest',
    component: TeacherRequestsComponent,
  },

  
  {
    path: "**",
    redirectTo: 'HomeComponent',
  },
  {
    path: "contact",
    component: ContactUsComponent

  },
  {
    path: "teacherRequestThatNotCare",
    component :TeacherRequestThatNotCareComponent
  },
  {
    path: "home",
    component: HomeComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
