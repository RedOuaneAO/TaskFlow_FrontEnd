import { createAction ,props } from "@ngrx/store";
import { UserInterface } from "../../task/model/UserInterface";
import { TokenInterface } from "../../task/model/TokenInterface";

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


export const LoadTokens =createAction("[Token] Load Tokens");
export const LoadTokensSuccess = createAction(
    "[Token] Load Tokens Success",
    props<{tokens: TokenInterface[]}>()
);
export const LoadTokensFailure = createAction(
    "[Token] Load Tokens Failure",
    props<{error: string}>()
);
