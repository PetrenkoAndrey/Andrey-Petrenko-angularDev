import { Injectable } from '@angular/core';
import { IFavoriteItem } from '../interfaces/ifavorite-item';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private notificationService: NotificationService,) { }


  public getFavorites(): Array<IFavoriteItem> {
    return JSON.parse(localStorage.getItem('favorites')) || []
  }

  public setFavorites(favoriteItem: IFavoriteItem): Array<IFavoriteItem> {
    let favorites = this.getFavorites()
    if (this.isFavorites(favoriteItem.city)) {
      let i = favorites.length;
      while (i--) {
        if (favorites[i]
          && favorites[i].hasOwnProperty('city')
          && favorites[i]['city'] === favoriteItem.city) {

          favorites.splice(i, 1);
          this.notificationService.success(favoriteItem.city + " removed from favorites")
        }
      }
      localStorage.setItem('favorites', JSON.stringify(favorites))
    } else {
      favorites.push(favoriteItem)
      this.notificationService.success(favoriteItem.city + " added to favorites")
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
    return this.getFavorites()
  }

  public isFavorites(city: string): boolean {
    let favorites = this.getFavorites()
    return !!favorites.find(x => x.city === city)
  }
}
