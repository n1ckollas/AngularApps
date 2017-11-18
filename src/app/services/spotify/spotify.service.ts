import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpotifyService {

  constructor(private _http:Http) { }

  getArtists(){
  	return this._http.get('/api/v2/spotify')
  		.map(response => response.json());
  }
}
