import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface ISignupModel {
  username :string;
  email :string;
  password :string;
}

interface ILoginModel {
  username :string;
  password :string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  // registers new user
  handleSignUp(userData :ISignupModel){
    console.log(userData);
    return this.http.post<ISignupModel>(`${environment.API_URL}/signup`, userData, {withCredentials: true});
  }

  // login function
  handleSignIn(userData :ILoginModel){
    return this.http.post<ILoginModel>(`${environment.API_URL}/login`, userData, {withCredentials: true});
  }
}
