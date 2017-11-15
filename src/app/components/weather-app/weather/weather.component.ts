import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../../services/weather-app/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	weatherData:any;

  constructor(private weather:WeatherService) { 

  }

  ngOnInit() {
  	this.weather.getWeather('New_York', 'NY').subscribe(res => {
  		this.weatherData = res;
  		console.log(res);
  	})
  }

}
