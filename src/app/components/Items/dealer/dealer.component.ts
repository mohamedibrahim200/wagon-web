import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Dealer } from './Dealer';

@Component({
  selector: 'app-dealer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dealer.component.html',
  styleUrl: './dealer.component.css'
})
export class DealerComponent {
  @Input() Cdealer!: Dealer;
  ngoninit(){  
  }
}

