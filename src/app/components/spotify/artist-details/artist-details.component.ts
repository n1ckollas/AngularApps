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
  hidden:boolean = true;

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
    this.hidden = false;
    var tracks;
    var id_div = document.getElementById(album_id);

  	this.sp.getAlbumTracks(album_id).subscribe(res => {
  		tracks = res;
      for (var i = tracks.items.length - 1; i >= 0; i--) {
        id_div.innerHTML += '<div class="card-footer"'+
                              '<p>Name: '+ tracks.items[i].name +'</p>'+
                              '<audio controls>' +
                                '<source src="'+ tracks.items[i].preview_url +'" type="audio/ogg">'+
                                '<source src="'+ tracks.items[i].preview_url +'" type="audio/mpeg">'+
                                'Your browser doesnt support this. But chrome does.'+
                              '</audio>'+
                            '</div>';
        id_div.classList.remove('hideMe');
      }
  	})
  }

}
