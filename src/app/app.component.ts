import { Component } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentQuestion: Question;
  currentQuestionIndex: number;
  summary: Question[];
  isQuizOver: boolean;

  constructor(){
    this.currentQuestionIndex = 0;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.summary = [];
    this.isQuizOver = false;
  }

  userSelectAnswer(answer:string){
    if(this.isQuizOver){
      console.log('Quiz is over');
      return;
    }
    let answerIndex = this.currentQuestion.answers.indexOf(answer);
    
    if(answerIndex < 0){
      throw new Error('Cannot find the answer index');
    }
    this.currentQuestion.userAnswer = answerIndex;
    this.summary.push(this.currentQuestion);
    this.currentQuestionIndex ++;
    this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
    this.isQuizOver = !(this.currentQuestion);
  }
}
