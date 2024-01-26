import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TaskInterface } from '../model/TaskInterface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http : HttpClient) { }
  getAllTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(environment.apiURL+'tasks');
  }
  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(environment.apiURL+'add_task' ,task);
  }
  assignTask(assignment: TaskInterface): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(environment.apiURL+'assign' ,assignment);
  }
}
