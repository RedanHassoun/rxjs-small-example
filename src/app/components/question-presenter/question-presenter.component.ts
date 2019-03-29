import { QuizService } from './../../services/quiz.service';
import { Question } from './../../model/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {
  question: Question;

  constructor(private quizService: QuizService) {
  }

  async onSelectAnswer(answer: string) {
    if (!this.question) {
      console.error('Question is undefinded');
      return;
    }

    let answerIndex: number = this.question.answers.indexOf(answer);

    try {
      await this.quizService.answerCurrentQuestion(answerIndex);
    } catch (e) {
      console.error('Error while answering question  ', e);
    }
  }

  ngOnInit() {
    this.quizService.getCurrentQuestion()
      .subscribe(q => {
        this.question = q;
      })
  }

}
