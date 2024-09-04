import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {

  @Input()
  carDetails: CarDetails = new CarDetails();
}

class CarDetails{
  mainImagesUrls: string []=['./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png','./assets/Site_Images/productCar.png'] 
}
