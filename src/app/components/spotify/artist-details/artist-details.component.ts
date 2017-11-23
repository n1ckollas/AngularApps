import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
	id:string;

  constructor(public route:ActivatedRoute) {
  }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	console.log(this.id);
  }

}
