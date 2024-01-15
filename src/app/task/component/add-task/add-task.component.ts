import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../ngrx/app-state';
import { AddTask } from '../../../ngrx/task/task.actions';
import {  selectorError } from '../../../ngrx/task/task.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  formData:any={};
  tags:any[]=[];
  selectedTags: number[] =[];
constructor(private store: Store<AppState>){}
errorMessages$: Observable<String | null> = this.store.select(selectorError);

  addTask(){
    this.formData['tags']=this.selectedTags;
    this.store.dispatch(AddTask({task: this.formData}))
  }
  
  CheckedTags(tagId:number){
    const index = this.selectedTags.indexOf(tagId);
    if (index == -1) {
      this.selectedTags.push(tagId);
    } else {
      this.selectedTags.splice(index, 1);
    }
    console.log(this.selectedTags)
  }

}
