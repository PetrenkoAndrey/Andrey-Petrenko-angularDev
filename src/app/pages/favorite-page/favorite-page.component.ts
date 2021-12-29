import { Component, OnInit } from '@angular/core';
import { IFavoriteItem } from 'src/app/interfaces/ifavorite-item';
@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {

  favoriteItems: Array<IFavoriteItem> = JSON.parse(localStorage.getItem('favorites')) || []

  constructor() { }

  ngOnInit(): void {
  }

  removeFavorites(city) {
    this.favoriteItems = this.favoriteItems.filter(p => p.city !== city);
  }

}
