import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AssignTask, DeleteTask, loadTasks } from '../../../ngrx/task/task.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../../ngrx/app-state';
import { TaskInterface } from '../../model/TaskInterface';
import {  allTasksSelector } from '../../../ngrx/task/task.selectors';
import { LoadTokens, loadUsers } from '../../../ngrx/user/user.actions';
import { UserInterface } from '../../model/UserInterface';
import { allUsersSelector } from '../../../ngrx/user/user.selectors';
import { TokenInterface } from '../../model/TokenInterface';
import { allTokensSelector } from '../../../ngrx/token/token.selectors';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
assignment:any={};
Taskdelete:any={};
tasks$: Observable<TaskInterface[]> = this.store.select(allTasksSelector);
tokens$:Observable<TokenInterface[]> = this.store.select(allTokensSelector);
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
token : TokenInterface={
  tokenType:"",
  number:0,
}
constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(loadTasks()) 
    this.store.dispatch(loadUsers()) 
    this.store.dispatch(LoadTokens());
  }
  assignTo(userId:number,taskId:number){
    this.assignment['taskId']=taskId
    this.assignment['assignedTo']=userId
    this.store.dispatch(AssignTask({assignment: this.assignment}))
    this.assignment={};
  }
  deleteTask(taskId:number){
    this.Taskdelete['demandedBy']=2;
    this.Taskdelete['type']="DELETE";
    this.Taskdelete['currentTask']=taskId;
    this.store.dispatch(DeleteTask({task : this.Taskdelete}))
    this.Taskdelete={};
  }
}
