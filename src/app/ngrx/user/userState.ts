import { UserInterface } from "../../task/model/UserInterface";

export interface UsersState {
    users: UserInterface[];
    isLoading: boolean;
    error: string | null;
}
