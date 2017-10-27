import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from  'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
	// static get prometers(){
	// 	return [Http];
	// }
	apiKey:string;
	workOutUrl:string;

  constructor(public http:Http)  { 
  	// this.http = http;
  	console.log('conected')
  	this.apiKey = 'jC4M-46y4QE262Xa-D_mfdPdtlb0rDhJ';
  	// https://api.mlab.com/api/1/databases?apiKey=2E81PUmPFI84t7UIc_5YdldAp1ruUPKye
  	this.workOutUrl = 'https://api.mlab.com/api/1/databases/workouts/collections/workouts/';


  }

  getWorkouts(){
  	return this.http.get(this.workOutUrl+'?apiKey='+this.apiKey)
  		.map(res => res.json());

  }


}
