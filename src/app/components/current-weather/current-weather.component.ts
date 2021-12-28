import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() city: string;
  @Input() currentWeather: any;


  constructor(private favoriteService: FavoritesService) { }

  ngOnInit(): void {
  }

  isFavorites(city) {
    return this.favoriteService.isFavorites(city)
  }

  setFavorites() {
    let favoriteItem = {
      city: this.city,
      temperature: this.currentWeather?.Temperature?.Metric?.Value,
      weather: this.currentWeather?.WeatherText,
      isFavorite: true
    }
    this.favoriteService.setFavorites(favoriteItem)

  }

}
