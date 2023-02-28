import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  Login(email: string, pass: string) {
    return this.http.get<User>(
      `https://localhost:44362/api/Login/Login/${email}/${pass}`
    );
  }
}
