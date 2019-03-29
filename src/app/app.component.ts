import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from './model/question';
import { QUESTIONS } from './model/questions';
import { QuizService } from './services/quiz.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  private isQuizOver$: Observable<boolean>;
  private resetSubscription:Subscription;

  constructor(private quizService: QuizService) {
  }

  init(){
    this.isQuizOver$ = this.quizService.isQuizOver();
  }

  ngOnInit(): void {
    this.init();
    this.resetSubscription = this.quizService.getQuizResetStream()
        .subscribe(i => {
          this.init();
        })
  }

  ngOnDestroy(): void {
    if(this.resetSubscription){
      this.resetSubscription.unsubscribe();
    }
  }
}
