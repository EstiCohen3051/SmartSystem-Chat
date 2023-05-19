import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeSystem } from '../../Models/TimeSystem';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private http: HttpClient) { }

  getSystem() {
    return this.http.get<TimeSystem[]>('https://localhost:44362/api/system/GetSystem')
  }
  addNewSystem(file: File | null) {
    console.log("i reached the service");
    //להוסיף
    const formData: FormData = new FormData();
    formData.append('file', file!);
    //להוסיף
    console.log(formData);
    
    return this.http.post<boolean>('https://localhost:44362/api/TimeSystem/addNewSystem', formData);

  }
}
