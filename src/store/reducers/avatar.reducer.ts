import { Options } from "@dicebear/avatars";
import * as style from "@dicebear/micah";
import { createReducer, on } from "@ngrx/store";
import { updateAvatar, avatar } from "../actions/avatar.action";


export const initialState :Partial<Options & style.Options> | undefined = {
    seed : "VishnuKrishnathu",
};

export const avatarReducer = createReducer(
    initialState,
    on(updateAvatar, function(state, {part , options} ){
        let tempObj :any= {};
        tempObj[part] = options;
        state = {...state, ...tempObj};
        return state;
    }),
    on(avatar, (state) => state)
);