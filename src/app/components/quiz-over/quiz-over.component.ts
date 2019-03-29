import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {
  private score: number = 0;

  constructor(private quizService: QuizService) { }

  async ngOnInit() {
    if (await this.quizService.isQuizOver())
      this.score = await this.quizService.getScore();
  }

  async startAgain() {
    await this.quizService.resetQuiz();
  }

}
