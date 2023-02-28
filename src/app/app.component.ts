import { Component } from '@angular/core';
import { AuthService } from './Services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front';
  src="./../assets/images/page1.jpg"

  constructor(private authService: AuthService) { }
  
  public singInWithGoogle(){
    this.authService.singInWithGoogle();
  }
}
