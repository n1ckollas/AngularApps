import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../services/spotify/spotify.service';



@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
	id:string;
	details:any;

  constructor(public route:ActivatedRoute, public sp:SpotifyService) {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.artistDetails(this.id);
  }

  ngOnInit() {

  }

  artistDetails(id:string){
  	console.log(id);
  	// this.sp.getArtistDetails(id).subscribe(r =>{
  	// 	this.details = r
  	// })
  }



}
