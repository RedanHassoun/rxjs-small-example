import { QuizService } from './../../services/quiz.service';
import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/model/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  questions$:Observable<Question[]>;
  
  constructor(private quizService:QuizService) { 
    this.questions$ = this.quizService.getAnsweredQuestions();
  }

  ngOnInit() {
  }

}
