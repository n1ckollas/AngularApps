import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {

  constructor(private _http:Http) { }

  getArtists(artist:string){
  	return this._http.get('/api/v2/spotify/:' + artist)
  		.map(response => response.json());
  }

  getArtistDetails(id){
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');
		return this._http.post('/api/v2/spotify/details', JSON.stringify({'artist_id' : id}), {headers: headers})
			.map(response => response.json());
  }
  
  getAlbumTracks(album_id:string){
  	var headers = new Headers({'Content-Type': 'application/json'});
  	return this._http.post('/api/v2/spotify/details', JSON.stringify({'album_id': album_id}), {headers: headers})
  		.map(response => response.json());
  }
}














