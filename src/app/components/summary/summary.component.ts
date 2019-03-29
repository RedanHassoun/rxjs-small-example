import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input('questions')
  questions:Question[];
  
  constructor() { }

  ngOnInit() {
  }

}
