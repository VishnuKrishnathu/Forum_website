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
export class ProfilePageComponent implements OnInit {

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

  constructor(private authService :AuthenticationService) { }

  /**
   * ? User data can be fetched from guard (AuthService)
   */
  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (data :IUserData) => this.user = data,
      (error) => null
    );

  }
  
}
