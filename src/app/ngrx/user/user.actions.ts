import { createAction ,props } from "@ngrx/store";
import { UserInterface } from "../../task/model/UserInterface";

export const loadUsers = createAction("[Users] Load Users");

export const LoadUsersSuccess = createAction(
    "[Users] Load Users Success",
    props<{users: UserInterface[]}>()
);

export const LoadUsersFailure = createAction(
    "[Users] Load Users Failure",
    props<{error: string}>()
);
export const AddUser = createAction(
    "[Users] Add User",
    props<{users: UserInterface}>()
);
