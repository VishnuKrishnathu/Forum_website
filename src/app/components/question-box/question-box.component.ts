import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent implements OnInit, OnChanges {
  @Input() public textInput! :string;
  public questionLength! :number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes :SimpleChanges){
    if(changes.textInput){
      this.questionLength = changes.textInput.currentValue.length;
    }
  }

}
