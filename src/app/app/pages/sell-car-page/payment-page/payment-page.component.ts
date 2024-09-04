import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export class PaymentPageComponent {

  @Input()
  carObject:any;
}
