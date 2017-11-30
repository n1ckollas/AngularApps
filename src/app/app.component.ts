import { Component } from '@angular/core';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, group, query, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  trigger('routeAnimation', [
  	transition('1 => 2', [
  		style({height:'!'}),
  		query(':enter', style({transform: 'translateX(100%)'})),
  		query(':enter, :leave', style({position: 'absolute', top:0, left:0, right:0})),
  		group([
  			query(':leave', [animate('150ms ease-in', style({transform: 'translateX(-100%)'}) )]),
  			query(':enter', [animate('150ms ease-in', style({transform: 'translateX(0)'}) )]),
  			]),
  		]),
  	transition('2 => 1', [
  		style({height:'!'}),
  		query(':enter', style({transform: 'translateX(-100%)'})),
  		query(':enter, :leave', style({position: 'absolute', top:0, left:0, right:0})),
  		group([
  			query(':leave', [animate('150ms ease-in', style({transform: 'translateX(100%)'}) )]),
  			query(':enter', [animate('150ms ease-in', style({transform: 'translateX(0)'}) )]),
  			]),
  		]),
  	])
  ]
})
export class AppComponent {
  title = 'app';

  getDepth(outlet){
  	return outlet.activatedRouteData['depth']
  }
}
