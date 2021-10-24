import { createAction, props } from "@ngrx/store";
import { IUserData } from 'src/app/interfaces/UserInterface';

export const userData = createAction('[User] Get User Data');
export const getUserDataSuccess = createAction('[User] Get User Success', props<{ user: IUserData }>());
export const getUserError = createAction('[User] Get User Error');

// export const addData = createAction('[User] Add User Data');