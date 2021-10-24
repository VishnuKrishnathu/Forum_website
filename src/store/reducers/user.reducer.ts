import { createReducer, on } from "@ngrx/store";
import { userData, getUserDataSuccess } from "src/store/actions/user.action";
import { IUserData } from "src/app/interfaces/UserInterface";

export const initialState : Readonly<IUserData>= {
    id : undefined,
    username : "",
    email : ""
}

export const userReducer = createReducer(
    initialState,
    on(getUserDataSuccess, (state, {user}) => user)
)