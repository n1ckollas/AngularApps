import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodosService {

  constructor(private _http:Http) { 
  	console.log('service is on');
  }

  getTodos(){
  	return this._http.get('/api/v1/todos').map(res => res.json());
  }

}
