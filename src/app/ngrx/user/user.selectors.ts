import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./userState";

export const usersStateSelector =  createFeatureSelector<UsersState>('userReducers');
export const allUsersSelector = createSelector(
    usersStateSelector,(state) =>{return state.users}
);
export const selectorIsLoading = createSelector(
    usersStateSelector,(state) =>{return state.isLoading}
);
export const selectorError = createSelector(
    usersStateSelector,(state) =>{return state.error}
);