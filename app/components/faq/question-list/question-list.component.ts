import { Component, OnInit } from '@angular/core';
import { DataService } from  '../../../services/faq/data.service';
import { Title } from '@angular/platform-browser';
import { Question } from '../../../models/faq/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
   questions:Object[];
   htmltitle:string='FAQ app';


  constructor(public dataService:DataService, public title: Title) {
    title.setTitle(this.htmltitle);
  }

  ngOnInit() {
     this.questions = this.dataService.getQuestions();
  }
  addQuestion(question:Question){
     this.dataService.addQuestion(question);
  }

}
