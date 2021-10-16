import { Component, OnInit } from '@angular/core';
import { IQuestions, IQuestionsData } from 'src/app/interfaces/PostsInterface';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts :Array<IQuestionsData> = [];

  constructor(
    private questionService :QuestionsService
  ) { }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe((data :IQuestions) => this.posts = data.data),
    (error :any) => console.log(error)
  }

}
