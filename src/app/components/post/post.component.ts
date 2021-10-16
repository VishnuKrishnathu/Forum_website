import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuestionsData } from 'src/app/interfaces/PostsInterface';

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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() :void{
    this.likes_input_id = `like_btn ${this.postData.questions_id}`;
  }
  getCheckboxStatus(){
    this.checkbox_stat = !this.checkbox_stat;
    this.like_post.unsubscribe();
  }

  ngOnDestroy(){
    this.like_post.unsubscribe();
  }

}
