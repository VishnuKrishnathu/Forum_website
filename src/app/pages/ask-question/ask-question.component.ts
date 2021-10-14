import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit, OnChanges {
  public value = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes :SimpleChanges){
    console.log(this.value);
  }
}
