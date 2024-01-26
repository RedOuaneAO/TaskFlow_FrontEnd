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
export const AddTask = createAction(
    "[Tasks] Add Task",
    props<{task: TaskInterface}>()
);
export const AddTaskSuccess = createAction(
    '[Task] Add Task Success',
    props<{ task: TaskInterface }>()
  );
export const AssignTask = createAction(
    "[Tasks] Assign Task",
    props<{assignment: TaskInterface}>()
    );
export const AssignTaskSuccess = createAction(
    '[Task] Assign Task Success',
    props<{ task: TaskInterface }>()
);
