import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor(private favoriteService: FavoritesService) { }
  ngOnInit(): void {
  }

  favoriteChange() {
    this.favoriteService.setFavorites(this.item)
    this.remove.emit(this.item.city);
  }

}
