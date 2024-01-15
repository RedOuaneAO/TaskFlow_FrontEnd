import { createReducer, on } from "@ngrx/store";
import { UsersState } from "./userState";
import { LoadUsersFailure, LoadUsersSuccess, loadUsers } from "./user.actions";

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null
};

export const UsersReducers = createReducer(
  initialState,
  on(loadUsers, (state) => ({
    ...state,
    isLoading: true
  })),
  on(LoadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    isLoading: false
  })),
  on(LoadUsersFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
);
