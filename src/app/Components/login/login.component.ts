import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = 'uuyiu';
  pass = '121111';
  constructor(private user: UserService) { }
  Login() {
    this.user.Login(this.email, this.pass);
  }
  ngOnInit(): void { }
}
