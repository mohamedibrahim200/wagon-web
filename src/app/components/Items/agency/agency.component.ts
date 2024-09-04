
import { Component, Input } from '@angular/core';
import { Agency } from './agency';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [CommonModule , NgForOf],
  templateUrl:'./agency.component.html',
  styleUrl:'./agency.component.css'
})
export class AgencyComponent {
  @Input () Cagency!: Agency;
  ngoninit(){  
  }
}
