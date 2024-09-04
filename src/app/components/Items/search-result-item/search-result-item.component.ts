import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-search-result-item',
  standalone: true,
  imports: [],
  templateUrl: './search-result-item.component.html',
  styleUrl: './search-result-item.component.css'
})
export class SearchResultItemComponent {

  @Input()
    item: searchResult = new searchResult();

}

export class searchResult{
  id: string = "";
  price:number = 0;
  currency: string = "";
  name: string = "";
  nameEn: string = "";
  model: number = 0;
  engineType: string = "";
  maxSpeed: number = 0;
  imageUrl: string = "";
}