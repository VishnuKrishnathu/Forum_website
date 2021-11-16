import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as style from "@dicebear/micah";
import { Options } from '@dicebear/avatars';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(
    private http :HttpClient
  ) { }

  changeAvatar(avatarObj :Partial<style.Options & Options>, usersId :number){
    this.http.post(environment.API_URL, {...avatarObj, usersId});
  }
}
