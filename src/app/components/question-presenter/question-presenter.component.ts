import { Question } from './../../model/question';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
  @Input('question')
  question:Question;

  @Output('answerChosen')
  answerChosen = new EventEmitter<string>();

  constructor() { }

  onSelectAnswer(answer:string){
    this.answerChosen.emit(answer);
  }

  ngOnInit() {
  }

}
