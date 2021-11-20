import { Options } from "@dicebear/avatars";
import * as style from "@dicebear/micah";
import { createReducer, on } from "@ngrx/store";
import { updateAvatar, avatar, avatarSuccess } from "../actions/avatar.action";


export const initialState :Partial<Options & style.Options> | undefined = {
    seed : "seed",
};

export const avatarReducer = createReducer(
    initialState,
    on(updateAvatar, function(state, {part , options} ){
        let tempObj :any = {};
        tempObj[part] = options;
        state = { ...state, ...tempObj };
        return state;
    }),
    on(avatarSuccess, (state, svgData) => {
        let tempObj :any = {...state, ...svgData};
        for (let [key , value] of Object.entries(tempObj)) {
            if(key == "seed") continue;
            if(value == null) delete tempObj[key]
            else {
                tempObj[key] = [ value ];
            }
            if(key == "type") delete tempObj[key]
        }
        return tempObj;
    })
);