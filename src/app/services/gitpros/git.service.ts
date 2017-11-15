import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class GitService {
	private username:string;
	private client_id = '8d357895619697a780c9';
	private client_secret = 'c3312c34fdb85800887c25a78c3105d2effd8ffb';


  constructor(public http:Http) { 
  	console.log("git service is working");
  	this.username = 'n1ckollas';
  }

  updateUser(username:string){
  	this.username = username
  }

  getUser(){
  	return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
  	.map(res => res.json());
  }  
  getRepos(){
  	return this.http.get("http://api.github.com/users/" + this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
  	.map(res => res.json());
  }

}
