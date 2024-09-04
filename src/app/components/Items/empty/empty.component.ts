import { Component, Input } from '@angular/core';
import { favouriteitems } from './detclass';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css'
})
export class EmptyComponent {

goToDetails() {
throw new Error('Method not implemented.');
}
  @Input()
  emptyPage: string | undefined;
  @Input()
  emptyHint: string | undefined;
favorites: any;
  
faviteitems : favouriteitems[] = [
  new favouriteitems ('nessan', '2014', 300000, 'Helwan', 80000, 2014, 'Sep 26, 2025', 'Sep 27, 2024'),
  // new favouriteitems ('KIA', '2014', 600000, 'cairo', 80000, 2012, 'Sep 26, 2025', 'Sep 27, 2022'),

]  
  
}
