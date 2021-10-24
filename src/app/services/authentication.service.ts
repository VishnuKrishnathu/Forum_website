import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUserData, ISignupModel, ILoginModel, ILoginData } from 'src/app/interfaces/UserInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // constructor
  constructor(private http: HttpClient) { }

  // userdata
  private static userData :IUserData= {
    id : undefined,
    username : "",
    email : ""
  };

  // setter to set the user data
  static setterUser(data :IUserData){
    this.userData = data;
  }

  // getter to get the user data
  static getterUser(){
    return this.userData;
  }

  // registers new user
  handleSignUp(userData :ISignupModel){
    console.log(userData);
    return this.http.post<ISignupModel>(`${environment.API_URL}/signup`, userData, {withCredentials: true});
  }

  // login function
  handleSignIn(userData :ILoginModel){
    return this.http.post<ILoginData>(`${environment.API_URL}/login`, userData, {withCredentials: true});
  }

  // get the user data
  getUser() :Observable<IUserData>{
    return this.http.get<IUserData>(`${environment.API_URL}/user`, {
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      },
      withCredentials: true
    });
  }

}
