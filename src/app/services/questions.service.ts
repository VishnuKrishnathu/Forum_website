import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserData } from 'src/app/interfaces/UserInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http :HttpClient
  ) { }

  submitQuestion( question :string, userId :number){
    return this.http.post<any>(`${environment.API_URL}/ask-question`, {
      question,
      users_id: userId 
    })
  }
}
