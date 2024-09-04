import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FavouriteitemelemnetComponent } from "../components/favouriteitemelemnet/favouriteitemelemnet.component";
import { Favitem } from '../components/favouriteitemelemnet/favitem';

@Component({
    selector: 'app-favourite-page',
    standalone: true,
    templateUrl: './favourite-page.component.html',
    styleUrl: './favourite-page.component.css',
    imports: [CommonModule, FavouriteitemelemnetComponent,NgFor]
})
export class FavouritePageComponent {
FavouriteItems:Favitem[] = JSON.parse('[{"model":"C-Elysee","name":"Citroen","price":200000,"location":"nasrcity","Kilometers":20000,"year":2010,"Posted_On":"Sep26,2021","Updated_On":"Sep30,2021"},{"model":"E200","name":"Mercedes","price":1500000,"location":"NorthCoast","Kilometers":20000,"year":1990,"Posted_On":"Sep26,2021","Updated_On":"Sep30,2021"},{"model":"Model X","name":"Tesla","price":80000,"location":"California","Kilometers":10000,"year":2023,"Posted_On":"2023-05-13","Updated_On":"2023-05-13"},{"model":"Model X","name":"Tesla","price":80000,"location":"California","Kilometers":10000,"year":2023,"Posted_On":"2023-05-13","Updated_On":"2023-05-13"},{"model":"Model X","name":"Tesla","price":80000,"location":"California","Kilometers":10000,"year":2023,"Posted_On":"2023-05-13","Updated_On":"2023-05-13"}]');
ngoninit(){
  //console.log(this.FavouriteItems);
}
}
