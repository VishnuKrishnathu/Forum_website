import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuestionsData } from 'src/app/interfaces/PostsInterface';
import { QuestionsService } from 'src/app/services/questions.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {

  @Input() postData! :IQuestionsData;
  likes_input_id :string = "";
  checkbox_stat :boolean = false;
  like_post !:Subscription;

  constructor(
    private questionService :QuestionsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() :void{
    console.log(this.postData);
    this.likes_input_id = `like_btn ${this.postData.questions_id}`;
  }


  getCheckboxStatus(){
    let token = localStorage.getItem('token');
    // getting the user id from the Auth service
    let userId = AuthenticationService.getterUser().id

    // unsubscribing the service if being called twice
    this.like_post && this.like_post.unsubscribe();

    if(userId){
      this.like_post = this.questionService.likesHandler(
        this.checkbox_stat, this.postData.questions_id, userId, token
      ).subscribe((data) => console.log(data), (error) => console.log(error));
      this.checkbox_stat = !this.checkbox_stat;
    }
  }

  ngOnDestroy(){
    this.like_post && this.like_post.unsubscribe();
  }

}