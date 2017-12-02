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
    var divId = document.getElementById(album_id);

  	this.sp.getAlbumTracks(album_id).subscribe(res => {
  		tracks = res;
      for (var i = tracks.items.length - 1; i >= 0; i--) {
        divId.innerHTML += '<div class="card-footer"'+
                              '<p>Name: '+ tracks.items[i].name +'</p>'+
                              '<audio controls>' +
                                '<source src="'+ tracks.items[i].preview_url +'" type="audio/ogg">'+
                                '<source src="'+ tracks.items[i].preview_url +'" type="audio/mpeg">'+
                                'Your browser doesnt support this. But chrome does.'+
                              '</audio>'+
                            '</div>';
      }
  	})
  }

  hideTracks(album_id:string){
    var divId = document.getElementById(album_id);
    var bId = document.getElementById('b-'+ album_id);
    if(this.hidden === false){
      this.hidden = true;
      divId.classList.add('hideMe');
      bId.innerText = "Show 'em";
    }else if(this.hidden === true){
      this.hidden = false;
      divId.classList.remove('hideMe');
      bId.innerText = "Hide 'em";
    }
  }

}
