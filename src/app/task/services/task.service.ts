import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  getAllTasks(): Observable<any> {
    return this.http.get(environment.apiURL+'tasks');
  }
  addTask(task: any): Observable<any> {
    return this.http.post(environment.apiURL+'add_task' ,task);
  }
  assignTask(assignment: any): Observable<any> {
    return this.http.post(environment.apiURL+'assign' ,assignment);
  }
}
