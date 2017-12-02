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
	albums:any;
  hidden:boolean = false;
  divId:any;
  bId:any;

  constructor(public route:ActivatedRoute, public sp:SpotifyService) {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.artistDetails(this.id);
  }

  ngOnInit() {

  }

  artistDetails(id:string){
  	this.sp.getArtistDetails(id).subscribe(res =>{
  		this.albums = res;
  	})

    
  }

  getTracks(album_id:string){
    var tracks;
    this.divId = document.getElementById(album_id);
    this.bId   = document.getElementById('b-'+ album_id);
  	this.sp.getAlbumTracks(album_id).subscribe(res => {
  		tracks = res;
      for (var i = tracks.items.length - 1; i >= 0; i--) {
        var audio  = document.createElement("audio");
        var footer = document.createElement("div");
        footer.classList.add('card-footer');
        audio.controls = true;
        audio.preload = "auto";
        audio.src = tracks.items[i].preview_url
        footer.appendChild(audio);
        this.divId.appendChild(footer);
      }
  	})
  }

  hideTracks(album_id:string){
    if(this.hidden === false){
      this.hidden = true;
      this.divId.classList.add('hideMe');
      this.bId.innerText = "Show 'em";
    }else if(this.hidden === true){
      this.hidden = false;
      this.divId.classList.remove('hideMe');
      this.bId.innerText = "Hide 'em";
    }
  }

}
