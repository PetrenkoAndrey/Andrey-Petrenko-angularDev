import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { finalize, mergeMap } from 'rxjs/operators'
import { forkJoin } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ILocationItem } from 'src/app/interfaces/ilocation-item';
import { ICurrentWeatherItem } from 'src/app/interfaces/icurrent-weather-item'

@Component({
  selector: 'app-home-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  city: string
  location: ILocationItem
  currentWeather: ICurrentWeatherItem
  fiveDaysWeather = []
  loading: boolean = true
  constructor(private weatherService: WeatherService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.city = history.state.city || 'Kyiv'
    //this.searchLocation(this.city)
  }

  ngOnDestroy() { }

  searchLocation(city: string) {
    this.loading = true
    if (city) {
      this.city = city
      this.weatherService.getLocations(this.city).pipe(
        untilDestroyed(this),
        finalize(() => this.loading = false),
        mergeMap(locations => {
          if (locations && locations.length > 0) {
            this.location = locations[0];
            const currentWeather = this.weatherService.getCurrenWeather(this.location.Key);
            const fiveDaysWeather = this.weatherService.get5DaysWeather(this.location.Key);
            return forkJoin([currentWeather, fiveDaysWeather])
          } else {
            this.notificationService.error("Not found any location")
            return []
          }
        })
      )
        .subscribe(result => {
          this.currentWeather = result[0][0]
          this.fiveDaysWeather = result[1].DailyForecasts
        },
          error => {
            this.notificationService.error(error.statusText)
          });
    } else {
      this.notificationService.error("Enter any location")
    }
  }
}
