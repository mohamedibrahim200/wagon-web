import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirmaion-page',
  templateUrl: './confirmaion-page.component.html',
  styleUrl: './confirmaion-page.component.css',
})
export class ConfirmaionPageComponent implements OnInit {
continue() {
  this.carObject.NextStep = 4;
  this.messageEmitter.emit(this.carObject);
}
  myFormGroup: any;
  discountCode: any;
  @Input()
  carObject: any;
  @Output()
  messageEmitter = new EventEmitter();
  displayDiscountForm: boolean = false;

  ngOnInit() {}
  displayDiscountInput() {
    this.displayDiscountForm = true;
    this.myFormGroup = new FormGroup({
      discountCode: new FormControl('', [Validators.required]),
    });
  }
  verifyCode(formData: any) {}
}
