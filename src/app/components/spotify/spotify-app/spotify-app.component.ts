import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify/spotify.service';
@Component({
  selector: 'app-spotify-app',
  templateUrl: './spotify-app.component.html',
  styleUrls: ['./spotify-app.component.css']
})
export class SpotifyAppComponent implements OnInit {
	answer:any;
  artist = '';

  constructor(public sp:SpotifyService) {}

  ngOnInit() {
  	
  }

  artistsSearch(artist:string){
  	this.sp.getArtists(artist).subscribe(res => {
  		this.answer = res;
      console.log('search for:');
      console.log(artist);
      console.log('returns');
  		console.log(this.answer);
  	})
  }

   onKey(event:any){
    this.artist = event.target.value;
    this.artistsSearch(this.artist);
  }
}
