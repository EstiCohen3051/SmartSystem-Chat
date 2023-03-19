import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChatContainerComponent } from './Components/chat-container/chat-container.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { StartComponent } from './Components/start/start.component';
import { AuthGuardService } from './Services/auth-guard/auth-guard.service';
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
    path: "chat",
    component: ChatContainerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "chat/:roomId",
    component: ChatContainerComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
