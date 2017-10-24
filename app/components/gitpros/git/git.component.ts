import { Component, OnInit } from '@angular/core';
import { GitService } from "../../../services/gitpros/git.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
})
export class GitComponent implements OnInit {
	user:any;
	repos:any[];
	username:any;

  constructor(public git:GitService) {
  	this.user = false;
   }

  ngOnInit() {  
  }

  searchUser(){
  	this.git.updateUser(this.username);
  	this.git.getUser().subscribe(user => {
  		this.user = user;
  	});
  	this.git.getRepos().subscribe(repos => {
  		this.repos = repos;
  	});

  }

}
