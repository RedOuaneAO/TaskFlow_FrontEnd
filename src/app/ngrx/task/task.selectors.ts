import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "./taskState";

export const tasksStateSelector =  createFeatureSelector<TasksState>('tasksReducers');
export const allTasksSelector = createSelector(
    tasksStateSelector,(state) =>{return state.tasks}
);
export const selectorIsLoading = createSelector(
    tasksStateSelector,(state) =>{return state.isLoading}
);
export const selectorError = createSelector(
    tasksStateSelector,(state) =>{return state.error}
);