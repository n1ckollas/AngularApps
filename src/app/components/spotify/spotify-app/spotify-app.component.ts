import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify/spotify.service';
@Component({
  selector: 'app-spotify-app',
  templateUrl: './spotify-app.component.html',
  styleUrls: ['./spotify-app.component.css']
})
export class SpotifyAppComponent implements OnInit {
	responce:boolean = false;
  searchTerms:any;
  artist = '';

  constructor(public sp:SpotifyService) {}

  ngOnInit() {
  	
  }

  artistsSearch(artist:string){
  	this.sp.getArtists(artist).subscribe(res => {
  		this.searchTerms = res;
      this.responce = true;
  	})
  }

   onKey(event:any){
    this.artist = event.target.value;
    if(this.artist != ''){
      this.artistsSearch(this.artist);
    }
  }
}
