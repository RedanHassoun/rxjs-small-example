import { QuizService } from './../../services/quiz.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Question } from 'src/app/model/question';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnDestroy {
  questions$:Observable<Question[]>;
  resetSubscription:Subscription;
  
  constructor(private quizService:QuizService) { 
  }

  init(){
    this.questions$ = this.quizService.getAnsweredQuestions();
  }

  ngOnInit() {
    this.init();
    this.resetSubscription = this.quizService.getQuizResetStream()
      .subscribe(i => {
        if(i > 0){
          this.init();
        }
      })
  }

  ngOnDestroy(): void {
    if(this.resetSubscription){
      this.resetSubscription.unsubscribe();
    }
  }

}
