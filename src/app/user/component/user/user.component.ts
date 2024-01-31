import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../task/model/UserInterface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/app-state';
import { loadUsers } from '../../../ngrx/user/user.actions';
import { allUsersSelector } from '../../../ngrx/user/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
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
    this.store.dispatch(loadUsers());
    console.log(this.users$)
  }
}
