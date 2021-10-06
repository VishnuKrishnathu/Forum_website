import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  handleSignUp(){
    return this.http.post<any>(`${environment.API_URL}/login`, {
      username : 'Vishnu Krishnathu'
    }, {withCredentials: true});
  }
}
