import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../models/faq/Question';
import { DataService } from '../../../services/faq/data.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
   @Input('question') question:Question;

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }
  hideQuestion(event, question){
    event.preventDefault();
    question.hide = !question.hide
  }
  removeQuestion(event,question){
    event.preventDefault();
    this.dataService.removeQuestion(question);
  }
}
