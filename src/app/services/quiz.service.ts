import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { QUESTIONS } from '../model/questions';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private currentQuestion: Question;
  private currentQuestionIndex$ = new BehaviorSubject<number>(0);
  private summary: Question[];

  constructor() {
    this.summary = [];
  }

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
    // if (await this.isQuizOver().toPromise()) {
    //   console.error('Quiz is over');
    //   return Promise.reject();
    // }

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
}
