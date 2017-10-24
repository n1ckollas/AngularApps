import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  htmltitle:string='Apps | Home';
  imgPath:string;
  clientsAppLogo:string;
  gitSearch:string;


  constructor(public title:Title) { 
  	title.setTitle(this.htmltitle);
    this.imgPath = '/assets/imgs/images.png';
    this.clientsAppLogo = '/assets/imgs/logo.png';
    this.gitSearch = '/assets/imgs/gitLogo.png';
   }

  ngOnInit() {
  }

}
