import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WeatherService {

private apiKey:string;
private conditionsUrl:string;

  constructor(private _http:Http) { 
  	this.apiKey = '4355cebab2f0cfd5';
  	this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey;
  }

  getWeather(city, state){
  	return this._http.get(this.conditionsUrl+'/conditions/q/'+state+'/'+city+'.json')
  		.map(res => res.json())

  }

}
