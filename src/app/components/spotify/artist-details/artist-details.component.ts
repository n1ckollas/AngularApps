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
	tracks:any;

  constructor(public route:ActivatedRoute, public sp:SpotifyService) {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.artistDetails(this.id);
  }

  ngOnInit() {

  }

  artistDetails(id:string){
  	this.sp.getArtistDetails(id).subscribe(res =>{
  		this.albums = res;
  		console.log(this.albums);
  	})
  }

  getTracks(album_id:string){
    console.log(album_id);
    var id_div = document.getElementById(album_id);
    id_div.innerHTML += '<p>button is clicked</p>';
    console.log(id_div);
  	// this.sp.getAlbumTracks(album_id).subscribe(res => {
  	// 	this.tracks = res;
  	// 	console.log(this.tracks);
  	// })
  }

}
