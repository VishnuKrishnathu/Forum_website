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

  changeAvatar(avatarObj :Partial<style.Options & Options>, usersId :number) {
    return this.http.post<Partial<style.Options & Options>>(`${environment.API_URL}/change-avatar`, {...avatarObj, usersId}, {
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  getAvatar(){
    return this.http.get<Partial<style.Options & Options>>(`${environment.API_URL}/get-avatar`, {
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}
