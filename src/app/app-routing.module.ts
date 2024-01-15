import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/component/task/task.component';
import { TagComponent } from './tag/component/tag/tag.component';
import { UserComponent } from './user/component/user/user.component';
import { AddTaskComponent } from './task/component/add-task/add-task.component';

const routes: Routes = [
  {path:'tasks' , component:TaskComponent},
  {path:'' , component:TaskComponent},
  {path:'tags' , component:TagComponent},
  {path:'users' , component:UserComponent},
  {path:'add-task' , component:AddTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
