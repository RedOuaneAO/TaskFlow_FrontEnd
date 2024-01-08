import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { loadTasks } from '../../../ngrx/task/task.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../../ngrx/app-state';
import { TaskInterface } from '../../model/TaskInterface';
import { allTasksSelector } from '../../../ngrx/task/task.selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
tasks$: Observable<TaskInterface[]> = this.store.pipe(select(allTasksSelector));
task: TaskInterface={
  description:"",
  startDate:"",
  endDate:"",
  assignedTo:""
}
constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(loadTasks())
    console.log(this.store)
    // console.log(this.task)
  }
  getAllTasks(){

  }
}
