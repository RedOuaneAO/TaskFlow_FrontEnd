import { createAction ,props } from "@ngrx/store";
import { TaskInterface } from "../../task/model/TaskInterface";

export const loadTasks = createAction("[Tasks] Load Tasks");


export const LoadTasksSuccess = createAction(
    "[Tasks] Load Tasks Success",
    props<{tasks: TaskInterface[]}>()
);

export const LoadTasksFailure = createAction(
    "[Tasks] Load Tasks Failure",
    props<{error: string}>()
);