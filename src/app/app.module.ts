import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserComponent } from './user/component/user/user.component';
import { AddUserComponent } from './user/component/add-user/add-user.component';
import { TaskComponent } from './task/component/task/task.component';
import { TagComponent } from './tag/component/tag/tag.component';
import { AddTaskComponent } from './task/component/add-task/add-task.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './sharedComponent/component/nav-bar/nav-bar.component';
import { SideBarComponent } from './sharedComponent/component/side-bar/side-bar.component';
import { TasksReducers } from './ngrx/task/task.reducer';
import { TasksEffects } from './ngrx/task/task.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersReducers } from './ngrx/user/user.reducer';
import { UsersEffects } from './ngrx/user/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    TaskComponent,
    TagComponent,
    AddTaskComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({tasksReducers: TasksReducers,userReducers : UsersReducers}, {}),
    EffectsModule.forRoot([TasksEffects ,UsersEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
