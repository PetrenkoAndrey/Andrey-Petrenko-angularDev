import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFavoriteItem } from 'src/app/interfaces/ifavorite-item';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {
  @Input() favoriteItem: IFavoriteItem;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private favoriteService: FavoritesService) { }
  ngOnInit(): void {
  }

  favoriteChange() {
    this.favoriteService.setFavorites(this.favoriteItem)
    this.remove.emit(this.favoriteItem.city);
  }

}
