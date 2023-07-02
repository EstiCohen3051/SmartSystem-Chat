import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from 'src/app/Models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private http: HttpClient) { }
  AddNewTeacher(t: Teacher) {
    return this.http.post<boolean>('https://localhost:44362/api/Enrollment/AddNewTeacher', t);
  }
  getAllTeacher() {
    return this.http.get<Teacher[]>(`https://localhost:44362/api/teacher/getAllTeacher`);
  }
  deleteTeacher(t: Teacher) {
    return this.http.post<boolean>(`https://localhost:44362/api/teacher/DeleteTeacher`, t)
  }
  updateTeacher(t: Teacher) {
    return this.http.post<boolean>(`https://localhost:44362/api/teacher/updateTeacher`, t)

  }
}
