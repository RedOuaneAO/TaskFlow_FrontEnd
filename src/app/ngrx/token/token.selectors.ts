import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TokensState } from "./tokenState";

export const tokensStateSelector =  createFeatureSelector<TokensState>('tokensReducers');
export const allTokensSelector = createSelector(
    tokensStateSelector,(state) =>{return state.tokens}
);
export const selectorIsLoading = createSelector(
    tokensStateSelector,(state) =>{return state.isLoading}
);
export const selectorError = createSelector(
    tokensStateSelector,(state) =>{return state.error}
);