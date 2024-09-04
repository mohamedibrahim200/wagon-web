import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pager',
  standalone: true,
  imports: [],
  templateUrl: './pager.component.html',
  styleUrl: './pager.component.css'
})
export class PagerComponent implements OnInit{
  ngOnInit(): void {
    
  }

  @Input()
  totalSearchResult: number = 0;
  @Input()
  numberOfResultPerPage: number = 10;
  @Input()
  currentPage: number = 1;
  
  pages: number[] = Array.from({ length: this.totalSearchResult / this.numberOfResultPerPage }, (_, index) => index);
  
}
