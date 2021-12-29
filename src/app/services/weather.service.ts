import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICurrentWeatherItem } from '../interfaces/icurrent-weather-item';
import { ILocationItem } from '../interfaces/ilocation-item';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_URI: string = environment.API_URI
  private API_KEY: string = environment.API_KEY
  constructor(private http: HttpClient) { }

  getLocations(city: string): Observable<Array<ILocationItem>> {
    const URI = this.API_URI + '/locations/v1/cities/autocomplete?apikey=' + this.API_KEY + '&q=' + city
    return this.http.get<Array<ILocationItem>>(URI)
  }

  getCurrenWeather(locationId: string): Observable<Array<ICurrentWeatherItem>> {
    const URI = this.API_URI + '/currentconditions/v1/' + locationId + '?apikey=' + this.API_KEY
    return this.http.get<Array<ICurrentWeatherItem>>(URI)
  }

  get5DaysWeather(locationId): Observable<any> {
    const URI = this.API_URI + '/forecasts/v1/daily/5day/' + locationId + '?apikey=' + this.API_KEY + '&metric=true'
    return this.http.get(URI)
  }


}
