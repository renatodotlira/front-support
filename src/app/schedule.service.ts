import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Schedule } from './models/schedule.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ScheduleService {

  constructor(private http:HttpClient) {}

  private scheduleUrl = 'http://localhost:8080/'

  public getImDay() {
    return this.http.get<Schedule[]>(this.scheduleUrl + "im-day");
  }


}
