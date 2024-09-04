import { Component, Input } from '@angular/core';
import { CarFilterService } from '../../../CarFilterService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-result-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result-page.component.html',
  styleUrl: './search-result-page.component.css'
})
export class SearchResultPageComponent {
  selectedCarTypes: string[] = [];

  constructor(private carFilterService: CarFilterService) { }

  ngOnInit(): void {
    this.carFilterService.selectedCarTypes$.subscribe(types => {
      this.selectedCarTypes = types;
    });
  }
}
