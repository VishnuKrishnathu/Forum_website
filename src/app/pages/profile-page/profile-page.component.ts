import { Component, OnInit, DoCheck } from '@angular/core';
import { IUserData } from 'src/app/interfaces/UserInterface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, DoCheck {

  public user : IUserData = {
    id : undefined,
    username : "",
    email : ""
  }
  public userDup : IUserData = {
    id : undefined,
    username : "",
    email : ""
  }

  public svg :string = "";


  constructor(private authService :AuthenticationService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (data :IUserData) => this.user = data,
      (error) => null
    );

  }
  
  ngDoCheck() :void {
    if(this.userDup !== this.user){
      this.userDup = this.user;
      this.svg = createAvatar(style, {
        seed : this.userDup.username,
        backgroundColor : "purple",
      });
    }
  }

}
