import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../../services/todos/todos.service';
import { Todo } from '../../../models/Todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
	todos: Todo[];

  constructor(private _todos:TodosService) {

  }

  ngOnInit() {
  	this.todos = [];
  	this._todos.getTodos().subscribe(todos => {
  		this.todos = todos;
  		console.log(todos);
  	})	
  }

}
