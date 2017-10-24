import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class GitService {
	private username:string;
	private client_id = 'Iv1.10d8e72ef8574a65';
	private client_secret = '7f8964738aacda665bd290ad0be82cdd8a41303c';


  constructor(public http:Http) { 
  	console.log("github service"); 
  	this.username = 'n1ckollas';
  }

  getUser(){
  	return this.http.get("https://api.github.com/users/" + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
  	.map(res => res.json());
  }

}
