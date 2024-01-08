import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../../task/services/task.service";
import { catchError, map, mergeMap, of } from "rxjs";
import { LoadTasksFailure, LoadTasksSuccess, loadTasks } from "./task.actions";

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
                catchError(err =>of(LoadTasksFailure({error :err.message})))
            ))
        ));



}