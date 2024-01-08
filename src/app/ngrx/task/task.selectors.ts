import { createSelector } from "@ngrx/store";
import { AppState } from "../app-state";
import { TasksState } from "./taskState";

export const tasksStateSelector =(state:AppState)=>state.tasks

export const allTasksSelector =createSelector(
    tasksStateSelector,
    (state:TasksState)=>state.tasks
);
export const selectorIsLoading = createSelector(
    tasksStateSelector,
    (state)=> state.isLoading
);
export const selectorError = createSelector(
    tasksStateSelector,
    (state)=> state.error
);