import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeSystem } from '../../Models/TimeSystem';
import { Teacher } from 'src/app/Models/Teacher';
import { Classes } from 'src/app/Models/Classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
cn=""
  constructor(private http: HttpClient) { }

  getSystem() {
    return this.http.get<TimeSystem[]>('https://localhost:44362/api/system/GetSystem')
  }
  GetTimeForClass(s: string) {
    return this.http.get<TimeSystem[]>(`https://localhost:44362/api/TimeSystem/GetTimeForClass?s=${s}`);
  }
  GetChangeTimeForClass(s: string) {
    return this.http.get<TimeSystem[]>(`https://localhost:44362/api/TimeSystem/SystemWithChange?classname=${s}`);

  }
  GetSystemForTeacher(s: string) {
    return this.http.post<TimeSystem[]>(`https://localhost:44362/api/TimeSystem/GetTimeForTeacher`, s);
  }
  addNewSystem(file: File | null) {
    //איך אני שולחת את הכיתה
    console.log("i reached the service");
    const formData: FormData = new FormData();
    formData.append('file', file!);
    formData.append('class', this.cn);
    console.log(formData);
    return this.http.post<boolean>('https://localhost:44362/api/TimeSystem/addNewSystem', formData);
  }
  addNewSystemFill(t: TimeSystem[],c:string) {
    alert(c)
    
    return this.http.post<boolean>(`https://localhost:44362/api/TimeSystem/addNewSystemFill?c=${c}`, t);
  }
  public getClasses() {
    return this.http.get<string[]>('https://localhost:44362/api/TimeSystem/GetClasses')
  }
  public getClass() {
    return this.http.get<Classes[]>('https://localhost:44362/api/TimeSystem/GetClass')
  }
  public getTeacher() {
    return this.http.get<Teacher[]>('https://localhost:44362/api/TimeSystem/GetTeacher')
  }
  public getSubject() {
    return this.http.get<string[]>('https://localhost:44362/api/TimeSystem/GetSubject')
  }
  public addClass(na: string, nu: number): Observable<boolean> {
    return this.http.get<boolean>(`https://localhost:44362/api/TimeSystem/addClass/${na},${nu}`)
  }
}
