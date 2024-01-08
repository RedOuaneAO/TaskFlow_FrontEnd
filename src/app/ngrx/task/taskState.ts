import { TaskInterface } from "../../task/model/TaskInterface";

export interface TasksState {
    tasks: TaskInterface[];
    isLoading: boolean;
    error: string | null;
}
