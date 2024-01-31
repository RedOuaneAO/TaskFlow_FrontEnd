import { createReducer, on } from "@ngrx/store";
import { TokensState } from "./tokenState";
import { LoadTokens, LoadTokensFailure, LoadTokensSuccess } from "../user/user.actions";


const initialState: TokensState = {
  tokens: [],
  isLoading: false,
  error: null
};

export const TokensReducers = createReducer(
  initialState,
  on(LoadTokens, (state) => ({
    ...state,
    isLoading: true
  })),
  on(LoadTokensSuccess, (state, { tokens }) => ({
    ...state,
    tokens: tokens,
    isLoading: false
  })),
  on(LoadTokensFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
);
