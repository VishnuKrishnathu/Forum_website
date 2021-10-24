import { Injectable } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getUserDataSuccess, userData, getUserError } from "src/store/actions/user.action";
import { IUserData } from 'src/app/interfaces/UserInterface';
import { of } from "rxjs";

@Injectable()
export class UserEffects{

    constructor(
        private authService :AuthenticationService,
        private actions$ :Actions
    ){}

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(userData),
        exhaustMap(() => this.authService.getUser().pipe(
            map((data) => getUserDataSuccess({user :data})),
            catchError(() => of({type: "[User] Get User Error"}))
        ))
    ));
}