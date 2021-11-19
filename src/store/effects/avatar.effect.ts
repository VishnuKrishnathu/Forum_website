import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { avatarSuccess, avatar } from '../actions/avatar.action';
import { AvatarService } from 'src/app/services/avatar.service';

@Injectable()
export class AvatarEffect {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(avatar),
    mergeMap(() => this.avatarService.getAvatar()
      .pipe(
        map(avatarObj => avatarSuccess(avatarObj)),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private avatarService : AvatarService
  ) {}
}