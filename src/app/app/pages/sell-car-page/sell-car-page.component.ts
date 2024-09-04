import { Component } from '@angular/core';
import { PostLogin } from '../../../_classes/postLogin/post-login';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sell-car-page',
    templateUrl: './sell-car-page.component.html',
    styleUrl: './sell-car-page.component.css',
})
export class SellCarPageComponent extends PostLogin {
  stepNo: number = 1;
  sellCar: any;
  constructor(router: Router){
    super(router);
  }
  moveNext(e: any) {
    
    this.stepNo = e.NextStep;
    this.sellCar = e;
  }
}
