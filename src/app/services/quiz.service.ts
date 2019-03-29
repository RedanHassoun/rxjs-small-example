import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { QUESTIONS } from '../model/questions';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestionIndex$ = new BehaviorSubject<number>(0);
  private quizNumberIndex$ = new BehaviorSubject<number>(0);

  constructor() { }

  public getCurrentQuestionIndex(): Observable<number> {
    return this.currentQuestionIndex$;
  }

  public getCurrentQuestion(): Observable<Question> {
    return this.currentQuestionIndex$.pipe(
      map(i => QUESTIONS[i])
    )
  }

  public getAnsweredQuestions(): Observable<Question[]> {
    return this.currentQuestionIndex$.pipe(
      map(i => QUESTIONS.filter(q => q.userAnswer > -1))
    )
  }

  public async answerCurrentQuestion(answerIndex: number): Promise<void> {
    if (answerIndex < 0) {
      throw new Error('Cannot find the answer index');
    }

    let index: number = this.currentQuestionIndex$.value;
    let question: Question = QUESTIONS[index];
    question.userAnswer = answerIndex;

    this.currentQuestionIndex$.next(index + 1);

    return Promise.resolve();
  }

  public isQuizOver(): Observable<boolean> {
    return this.currentQuestionIndex$.pipe(
      map(i => i >= QUESTIONS.length)
    );
  }

  public resetQuiz(): Promise<void> {
    for(let i=0; i< QUESTIONS.length; i++){
      QUESTIONS[i].userAnswer = -1;
    }
    this.currentQuestionIndex$ = new BehaviorSubject<number>(0);
    let quizIndex = this.quizNumberIndex$.value;
    this.quizNumberIndex$.next(quizIndex + 1);
    return Promise.resolve();
  }

  public getQuizResetStream(): Observable<number> {
    return this.quizNumberIndex$;
  }
}
