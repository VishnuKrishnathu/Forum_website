import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http :HttpClient
  ) { }

  questionHandler(comment :string, questionId :number) {
    return this.http.post<{message :string}>(`${environment.API_URL}/add-comment`, {
      comment, questionId
    }, {
      headers : {
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
      }
    });
  }
}
