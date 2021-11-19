import { createAction, props } from '@ngrx/store';
import { Avataar } from 'src/app/interfaces/AvatarInterface';
import { Options } from "@dicebear/avatars";
import * as style from "@dicebear/micah";

export const avatar = createAction('[Avatar] Get Avatar');
export const updateAvatar = createAction(
    '[Avatar] Update Avatar', 
    props<Avataar>()
);
export const avatarSuccess = createAction('[Avatar] Get Avatar Sucess', props<Partial<style.Options & Options>>());