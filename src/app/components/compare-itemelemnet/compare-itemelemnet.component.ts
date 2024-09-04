import { Component, Input } from '@angular/core';
import { Comitem } from './comperItems';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-compare-itemelemnet',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './compare-itemelemnet.component.html',
  styleUrl: './compare-itemelemnet.component.css'
})
export class CompareItemelemnetComponent {
  @Input() Citem!: Comitem;
  ngoninit(){
   
  }
}
