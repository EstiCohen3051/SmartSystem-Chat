import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'firebase/auth';
import { Users } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }
  // Login(email: string) {
  //   return this.http.get<Users>(
  //     `https://localhost:44362/api/Login/Login/${email}`
  //   );
  // }
  
}
