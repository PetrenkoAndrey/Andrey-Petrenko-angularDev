import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {

  weatherItems = JSON.parse(localStorage.getItem('favorites'))

  constructor() { }

  ngOnInit(): void {
  }

  removeFavorites(city) {
    this.weatherItems = this.weatherItems.filter(p => p.city !== city);;
  }

}
