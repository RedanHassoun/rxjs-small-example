import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-over',
  templateUrl: './quiz-over.component.html',
  styleUrls: ['./quiz-over.component.css']
})
export class QuizOverComponent implements OnInit {

  constructor(private quizService:QuizService) { }

  ngOnInit() {
  }

  async startAgain(){
    await this.quizService.resetQuiz();
  }

}
