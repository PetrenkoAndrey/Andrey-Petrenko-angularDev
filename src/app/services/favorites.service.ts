import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private notificationService: NotificationService,) { }


  getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || []
  }

  setFavorites(favoriteItem) {
    let favorites = this.getFavorites()
    if (this.isFavorites(favoriteItem.city)) {
      var i = favorites.length;
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

  isFavorites(city) {
    let favorites = this.getFavorites()
    return favorites.find(x => x.city === city)
  }
}
