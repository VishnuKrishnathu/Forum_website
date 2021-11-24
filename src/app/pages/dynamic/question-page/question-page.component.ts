import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { ICommentsData } from 'src/app/interfaces/PostsInterface';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  questionId !:number ;

  postComments :Array<ICommentsData> = [];

  constructor(
    private commentService :CommentsService,
    private router :Router,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => this.questionId = data.id);
    this.commentService.getPostComments(this.questionId).subscribe(
      (data) => this.postComments = [...this.postComments, ...data.data],
      // (data) => console.log(data.data),
      (error) => console.log(error)
    );
  }

  handleComment(e :any){
    console.log(e.target[0].value);
    e.target[0].value = "";
  }

}
