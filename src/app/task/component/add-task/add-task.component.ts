import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../ngrx/app-state';
import { AddTask } from '../../../ngrx/task/task.actions';
import {  selectorError } from '../../../ngrx/task/task.selectors';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @ViewChild('errorMessage') errorMessageElement: ElementRef | undefined;
  formData:any={};
  tags:any[]=[];
  selectedTags: number[] =[];
  constructor(private store: Store<AppState>,  private router:Router){}
  errorMessages$: Observable<String | null> = this.store.select(selectorError);

  addTask(){
    this.formData['tags']=this.selectedTags;
    this.store.dispatch(AddTask({task: this.formData}));
    // this.tags=[];
    // this.formData={};
    // this.router.navigate(['/tasks']);
  }
  ngOnInit() {
    this.hideErrorMessage();
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


  hideErrorMessage(){
    if (this.errorMessages$) {
      this.errorMessages$.subscribe(errorMessage => {
        if (errorMessage) {
          setTimeout(() => {
            this.errorMessageElement?.nativeElement.remove();
        }, 4000);
      }
    });
  }
}

}
