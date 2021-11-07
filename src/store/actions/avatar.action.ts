import { createAction, props } from '@ngrx/store';
import { Avataar } from 'src/app/interfaces/AvatarInterface';

export const avatar = createAction('[Avatar] Get Avatar');
export const updateAvatar = createAction(
    '[Avatar] Update Avatar', 
    props<Avataar>()
);