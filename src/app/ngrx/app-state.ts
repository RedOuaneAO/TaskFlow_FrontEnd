import { TokenInterface } from "../task/model/TokenInterface";
import { UserInterface } from "../task/model/UserInterface";
import { TasksState } from "./task/taskState";

export interface AppState {
    tasks: TasksState,
    users: UserInterface,
    tokens:TokenInterface
}
