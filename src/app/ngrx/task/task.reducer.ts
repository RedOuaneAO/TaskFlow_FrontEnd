import { createReducer, on } from "@ngrx/store";
import { TasksState } from "./taskState";
import {  AddTask, LoadTasksFailure, LoadTasksSuccess, loadTasks } from "./task.actions";

const initialState: TasksState = {
  tasks: [],
  isLoading: false,
  error: null
};

export const TasksReducers = createReducer(
  initialState,
  on(loadTasks, (state) => ({
    ...state,
    isLoading: true
  })),
  on(LoadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks: tasks,
    isLoading: false
  })),
  on(LoadTasksFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
  on(AddTask, (state, {task}) => ({
    ...state,
    isLoading: false,
    tasks: [...state.tasks, task]
  })),
);
