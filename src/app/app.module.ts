import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionPresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
