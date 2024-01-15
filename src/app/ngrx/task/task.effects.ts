import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../../task/services/task.service";
import { EMPTY, catchError, map, mergeMap, of } from "rxjs";
import { AddTask, AssignTask, LoadTasksFailure, LoadTasksSuccess, loadTasks } from "./task.actions";

@Injectable()
export class TasksEffects {
    constructor(
        private action$: Actions,
        private taskService: TaskService
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
            map(value => console.log(value)),
            catchError(err =>of(LoadTasksFailure({error :err.error.message})))
        ))
        ));
    assignTask = createEffect((): any => this.action$.pipe(
        ofType(AssignTask),
        mergeMap((actions) => this.taskService.assignTask(actions.assignment).pipe(
            map(value => console.log(value)),
            // catchError(err => EMPTY)
            catchError(err =>of(LoadTasksFailure({error :err.error.message})))
        ))
        ));

}