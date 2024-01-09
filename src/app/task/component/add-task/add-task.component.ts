import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/app-state';
import { AddTask } from '../../../ngrx/task/task.actions';

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
  ngOnInit(){

  }

  addTask(){
    this.formData['tags']=this.selectedTags;
    console.log(this.formData)
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
