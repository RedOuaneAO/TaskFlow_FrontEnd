import { TokenInterface } from "../../task/model/TokenInterface";

export interface TokensState {
    tokens: TokenInterface[];
    isLoading: boolean;
    error: string | null;
}
