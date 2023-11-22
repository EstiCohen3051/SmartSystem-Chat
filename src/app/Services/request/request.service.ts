import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestTeacher } from 'src/app/Models/RequestTeacher';
import { Teacher } from 'src/app/Models/Teacher';
import { optimalResult } from 'src/app/Models/optimalResult';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public r1!: RequestTeacher;
  public OptimalArr: optimalResult[] = [];
  constructor(private http: HttpClient) {
  }
  GetAllRequest() {
    return this.http.get<RequestTeacher[]>(`https://localhost:44362/api/Request/getAllRequest`)
  }
  getIdTeacher(id:string) {
    return this.http.get<Teacher>(`https://localhost:44362/api/Request/getIdTeachet/${id}`)

  }
  a():optimalResult[] {
    this.findTeacher(this.r1).subscribe(res => {
      this.OptimalArr = res;
    })
    return this.OptimalArr;
  }
  findTeacher(r: RequestTeacher) {
    console.log(r);
    this.r1 = r;
    return this.http.post<optimalResult[]>(`https://localhost:44362/api/Request/findTeacher`,r)
  }
  rejectionRequest(idr:number) {
    return this.http.get<boolean>(`https://localhost:44362/api/Request/rejectionRequest?id=${idr}`);
  }
  UpdateChange(o: optimalResult[], idr: number) {
    
    return this.http.post<boolean>(`https://localhost:44362/api/Messages/UpdateChange?idr=${idr}`,o);
  }
}