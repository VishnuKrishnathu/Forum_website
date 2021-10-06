import { ClassMethod } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  checkoutForm :FormGroup = new FormGroup({});
  error : string = "";
  errors : Array<string> = [];

  
  constructor(
    private formBuilder :FormBuilder,
    private authenticationService :AuthenticationService
    ) { }
    
  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      username : new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      email_address : new FormControl('', [ Validators.required, Validators.email ]),
      password : new FormControl( '', [Validators.required, Validators.minLength(5)]),
      confirm_password : new FormControl( '', [Validators.required, Validators.minLength(5)])
    });
  }

  handleSignUp(){
    console.log(this.checkoutForm);
    this.error = ""
    // let controls =
    if(this.checkoutForm.status == "INVALID") {
      this.error = "Check the input fields and try again";
    }
    else {
      let values = this.checkoutForm.value;
      if(values.password !== values.confirm_password) this.error = "Password mismatch";
      else if(values.username.split(" ").length >= 2) this.error = "Username cannot have space"
      else{
        this.authenticationService.handleSignUp().subscribe((data :any) => {
          console.log(data);
        }, err => {console.log(err)});
      }
    }
  }

}
