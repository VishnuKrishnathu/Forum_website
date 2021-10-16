import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { IQuestions } from '../interfaces/PostsInterface';

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

  getAllQuestions(){
    return this.http.post<IQuestions>(`${environment.API_URL}/get-questions`, {
      user_id : AuthenticationService.getterUser().id
    });
  }
}
