import { Component } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';
import { QuizService } from './services/quiz.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isQuizOver$: Observable<boolean>;

  constructor(private quizService: QuizService) {
    this.isQuizOver$ = this.quizService.isQuizOver();
  }
}
