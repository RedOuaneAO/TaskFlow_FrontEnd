import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AssignTask, loadTasks } from '../../../ngrx/task/task.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../../ngrx/app-state';
import { TaskInterface } from '../../model/TaskInterface';
import {  allTasksSelector } from '../../../ngrx/task/task.selectors';
import { loadUsers } from '../../../ngrx/user/user.actions';
import { UserInterface } from '../../model/UserInterface';
import { allUsersSelector } from '../../../ngrx/user/user.selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  assignment:any={};
tasks$: Observable<TaskInterface[]> = this.store.select(allTasksSelector);
task: TaskInterface={
  id:0,
  description:"",
  startDate:"",
  endDate:"",
  assignedTo:""
}
users$: Observable<UserInterface[]> = this.store.select(allUsersSelector);
user: UserInterface={
  id:0,
  firstName:"",
  secondName:"",
  userName:"",
  email:""
}
constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(loadTasks()) 
    this.store.dispatch(loadUsers()) 
  }
  assignTo(userId:number,taskId:number){
    this.assignment['taskId']=taskId
    this.assignment['assignedTo']=userId
    console.log(this.assignment)
    this.store.dispatch(AssignTask({assignment: this.assignment}))
  }
}
