import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Favitem } from './favitem';

@Component({
  selector: 'app-favouriteitemelemnet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favouriteitemelemnet.component.html',
  styleUrl: './favouriteitemelemnet.component.css'
})
export class FavouriteitemelemnetComponent {
@Input() item!: Favitem;
ngoninit(){
  //console.log(this.item); 
}
}
