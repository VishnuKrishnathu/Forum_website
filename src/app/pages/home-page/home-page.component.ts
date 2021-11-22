import { Component, OnInit, DoCheck } from '@angular/core';
import { IQuestions, IQuestionsData } from 'src/app/interfaces/PostsInterface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { IUserData } from 'src/app/interfaces/UserInterface';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, DoCheck {

  posts :Array<IQuestionsData> = [];
  userId :number | undefined = AuthenticationService.getterUser().id;

  /**
   * Variables defined to update the id of the user
   */
  user : IUserData = {
    id : undefined,
    email : '',
    username : ''
  };
  userOld : IUserData = {
    id : undefined,
    email : '',
    username : ''
  }

  constructor(
    private questionService :QuestionsService,
    private store :Store<{user : IUserData}>
  ) { 
    this.store.dispatch({type: '[User] Get User Data'});
  }

  ngOnInit(): void {
    this.store.select('user').subscribe(
      (data) => this.user = data,
      (error) => console.log(error)
    );

  }

  ngDoCheck() :void{
    if(this.user.id != this.userOld.id){
      this.userOld = this.user;

      // get questions data from the backend
      this.questionService.getAllQuestions(this.user.id).subscribe(
        (data :IQuestions) => this.posts = data.data,
        (error :any) => console.log(error)
      );
    }

  }
} 
