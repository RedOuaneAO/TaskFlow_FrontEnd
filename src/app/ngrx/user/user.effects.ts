import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "../../user/services/user.service";
import { LoadUsersFailure, LoadUsersSuccess, loadUsers } from "./user.actions";

@Injectable()
export class UsersEffects {
    constructor(
        private action$: Actions,
        private userService: UserService
    ) {}

    getAllUsersEffect= createEffect(
        ():any=>this.action$.pipe(
            ofType(loadUsers),
            mergeMap(()=>this.userService.getAllUsers().pipe(
                map(val=>LoadUsersSuccess({users:val})),
                catchError(err =>of(LoadUsersFailure({error :err.error.message})))
            ))
        ));

}