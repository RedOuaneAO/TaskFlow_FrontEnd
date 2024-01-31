import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../../task/services/task.service";
import { EMPTY, catchError, map, mergeMap, of } from "rxjs";
import { AddTask, AddTaskSuccess, AssignTask, AssignTaskSuccess, DeleteTask, DeleteTaskSuccess, LoadTasksFailure, LoadTasksSuccess, loadTasks } from "./task.actions";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable()
export class TasksEffects {
    constructor(
        private action$: Actions,
        private taskService: TaskService,
        private router :Router,
        private store :Store
    ) {}

    getAlltasksEffect= createEffect(
        ():any=>this.action$.pipe(
            ofType(loadTasks),
            mergeMap(()=>this.taskService.getAllTasks().pipe(
                map(val=>LoadTasksSuccess({tasks:val})),
                catchError(err =>of(LoadTasksFailure({error :err.error.message})))
            ))
        ));

    addTask = createEffect((): any => this.action$.pipe(
        ofType(AddTask),
        mergeMap((actions) => this.taskService.addTask(actions.task).pipe(
            map(value => {
                this.router.navigate(['/tasks']);
                return AddTaskSuccess({ task: value }); 
            }),
            catchError(err =>of(LoadTasksFailure({error :err.error.message})))
        ))
        ));
    assignTask = createEffect((): any => this.action$.pipe(
        ofType(AssignTask),
        mergeMap((actions) => this.taskService.assignTask(actions.assignment).pipe(
            map(value => {
                this.store.dispatch(loadTasks());
                return AssignTaskSuccess({ task: value }); 
            }),
            catchError(err =>of(LoadTasksFailure({error :err.error.message})))
        ))
        ));
    deleteTask = createEffect((): any => this.action$.pipe(
        ofType(DeleteTask),
        mergeMap((actions) => this.taskService.taskModification(actions.task).pipe(
            map(value => {
                // this.store.dispatch(loadTasks());
                return DeleteTaskSuccess({ task: value }); 
            }),
            catchError(err =>of(LoadTasksFailure({error :err.error.message})))
        ))
));
}