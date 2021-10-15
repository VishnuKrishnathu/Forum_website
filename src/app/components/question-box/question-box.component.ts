import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUserData } from 'src/app/interfaces/UserInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent implements OnInit, OnChanges {
  @Input() public textInput! :string;
  public questionLength! :number;
  public errorMessage :string = "";

  constructor(
    private questionService :QuestionsService,
    private route :Router
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes :SimpleChanges){
    if(changes.textInput){
      this.questionLength = changes.textInput.currentValue.length;
    }
  }

  questionHandler(){
    this.errorMessage = "";
    if(this.questionLength > 199){
      this.errorMessage = "Question cannot be greater than 199 words"
    };
    let user_id = AuthenticationService.getterUser().id;
    // console.log(AuthenticationService.getterUser());
    user_id !== undefined && this.questionService.submitQuestion(this.textInput, user_id).subscribe((data :IUserData)=>{
      this.route.navigate(['/']);
    }, (error) => this.errorMessage = "Error in posting the question, try again later");
  }

}
