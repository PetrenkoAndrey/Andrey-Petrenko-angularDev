import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { finalize, mergeMap } from 'rxjs/operators'
import { forkJoin } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-home-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit, OnDestroy {
  city: string
  location: any
  currentWeather = {}
  dailyForecast = []
  loading = true
  constructor(private weatherService: WeatherService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.city = history.state.city || 'Kyiv'
    //this.searchLocation(this.city)

  }

  ngOnDestroy() { }

  searchLocation(city) {
    this.loading = true
    if (city) {
      this.city = city
      this.weatherService.getLocations(this.city).pipe(
        untilDestroyed(this),
        finalize(() => this.loading = false),
        mergeMap(location => {
          if (location && location.length > 0) {
            this.location = location[0];
            const currentWeather = this.weatherService.getCurrenWeather(location[0].Key);
            const dailyForecast = this.weatherService.get5DayWeather(location[0].Key);
            return forkJoin([currentWeather, dailyForecast])
          } else {
            this.notificationService.error("Not found any location")
            return []
          }
        })
      )
        .subscribe(result => {
          this.currentWeather = result[0][0]
          this.dailyForecast = result[1].DailyForecasts
        },
          error => {
            this.notificationService.error(error.statusText)
          });
    } else {
      this.notificationService.error("Enter any location")
    }


  }


}
