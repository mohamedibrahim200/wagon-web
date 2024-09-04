import { CommonModule, Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent implements OnInit{

  @Input()
  favorite: Favorite = new Favorite();

  constructor(private router: Router){}
  ngOnInit(): void {

  }
  goToDetails() {
    this.router.navigateByUrl('/CarDetails');
  }
}

export class Favorite {
  id = '';
  price= 300000;
  currency = '';
  name = 'Citroen C-Elysee';
  nameEn = '';
  model= 2014;
  engineType = '';
  maxSpeed= 0;
  imageUrl = './assets/Site_Images/car_one.png';
  city = '6Th Of October City';
  spentKilometers = 80000;
  createdOn: string= 'Sep 26, 2021';
  updatedOn: string = 'Sep 27, 2021';
}
