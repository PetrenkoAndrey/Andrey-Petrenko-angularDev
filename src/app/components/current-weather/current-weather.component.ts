import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeatherItem } from 'src/app/interfaces/icurrent-weather-item';
import { IFavoriteItem } from 'src/app/interfaces/ifavorite-item';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() city: string;
  @Input() locationId: string;
  @Input() currentWeather: ICurrentWeatherItem;


  constructor(private favoriteService: FavoritesService) { }

  ngOnInit(): void {
  }

  isFavorites(city: string): boolean {
    return this.favoriteService.isFavorites(city)
  }

  setFavorites(): Array<IFavoriteItem> {
    let favoriteItem: IFavoriteItem = {
      city: this.city,
      id: this.locationId,
      temperature: this.currentWeather?.Temperature?.Metric?.Value,
      weather: this.currentWeather?.WeatherText,
      isFavorite: true
    }
    return this.favoriteService.setFavorites(favoriteItem)

  }

}
