import { UserInterface } from "../task/model/UserInterface";
import { TasksState } from "./task/taskState";

export interface AppState {
    tasks: TasksState,
    users: UserInterface
}
