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

  getAllQuestions(user_id : number | undefined | null){
    return this.http.post<IQuestions>(`${environment.API_URL}/get-questions`, {
      user_id
    });
  }

  likesHandler(likeStatus :boolean, postId :number, userId :number, token :string | null){
    if(!likeStatus){
      return this.http.post<{message :string} | null>(`${environment.API_URL}/addLike`, {
        userId, postId
      }, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      });

    }else {
      return this.http.delete<{message :string}>(`${environment.API_URL}/addLike`, {
        headers: {
          'Authorization' : `Bearer ${token}`
        },
        body : {
          userId,
          postId
        }
      })
    }
    
  }
}
