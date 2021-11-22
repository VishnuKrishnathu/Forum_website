import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuestionsData } from 'src/app/interfaces/PostsInterface';
import { QuestionsService } from 'src/app/services/questions.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {

  @Input() postData! :IQuestionsData;
  likes_input_id :string = "";
  checkbox_stat :boolean = false;
  likes_count :number = 0;
  like_post !:Subscription;
  comment :string = "";

  constructor(
    private questionService :QuestionsService,
    private commentService :CommentsService
  ) { }

  ngOnInit(): void {}

  ngOnChanges() :void{
    this.likes_count = this.postData.likes;
    this.likes_input_id = `like_btn ${this.postData.questions_id}`;
    if(!this.postData.likes_id) this.checkbox_stat = false;
    if(this.postData.likes_id) this.checkbox_stat = true;
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
      ).subscribe(
        (data) => {
          if(data == null) this.likes_count --;
          else this.likes_count ++;
        }, 
        (error) => console.log(error)
      );
      this.checkbox_stat = !this.checkbox_stat;

    }
  }

  ngOnDestroy(){
    this.like_post && this.like_post.unsubscribe();
  }

  submitComment() :void{
    if(this.comment == "") return;

    this.commentService.questionHandler(this.comment, this.postData.questions_id).subscribe(
      (data) => this.comment = "",
      (error) => console.log(error)
    )

  }

}