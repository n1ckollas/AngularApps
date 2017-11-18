import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify/spotify.service';
@Component({
  selector: 'app-spotify-app',
  templateUrl: './spotify-app.component.html',
  styleUrls: ['./spotify-app.component.css']
})
export class SpotifyAppComponent implements OnInit {
	answer:any

  constructor(public sp:SpotifyService) {}

  ngOnInit() {
  	this.artists()
  }

  artists(){
  	this.sp.getArtists().subscribe(res => {
  		this.answer = res;
  		console.log(this.answer);
  	})
  }

}
