import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

interface ILoginData{
  user : {
    id :number;
    username :string;
    password :string;
  },
  token :string;
}

interface IErrorData{
  error : {
    message :string;
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm :FormGroup = new FormGroup({});
  error :string = "";

  constructor(
    private authenticate :AuthenticationService,
    private router :Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('', [Validators.required, Validators.minLength(5)]),
      password : new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  handleLogin(){
    this.error = "";
    if(this.loginForm.status == "INVALID"){
      this.error = "Check the input fields and try again";
    }
    else{
      let values = this.loginForm.value;
      console.log(values.username, values.password);
      let error_message = this.authenticate.handleSignIn({
        username : values.username,
        password : values.password
      }).subscribe((data :ILoginData) => {
        localStorage.setItem("token", data.token);
        this.router.navigate(['/']);
      }
      ,(err :IErrorData) => this.error = "Wrong login credentials. Try again");
    }
  }

  errorMessage(){}
}
