import { Component } from '@angular/core';
import { FavoriteComponent } from "../../../components/Items/favorite/favorite.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-favorites-page',
    templateUrl: './favorites-page.component.html',
    styleUrl: './favorites-page.component.css',
})
export class FavoritesPageComponent {
  favoriteNumber = 6;
  user: any;
  emptyHint = "Explore your favorite car to show them here";
  constructor(){
    this.user = localStorage.getItem('UserData');
    this.emptyHint = this.user? this.emptyHint: "You need to login find your favorites.";
  }
}
