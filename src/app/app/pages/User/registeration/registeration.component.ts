import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users, patterns } from '../../../../../environments/environment';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent implements OnInit{
myFormGroup: any;

ngOnInit() {
  this.myFormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.pattern(patterns.namesPattern)]),
    lastName: new FormControl("", [Validators.required, Validators.pattern(patterns.namesPattern)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    userName: new FormControl("", [Validators.required, Validators.pattern(patterns.namesPattern)]),
    PhoneNumber: new FormControl("", [Validators.required, Validators.pattern(patterns.NumbersOnly)]),
    Birthday: new FormControl("",  [Validators.required, this.dateValidator]),
    gender: new FormControl("Male", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.pattern(patterns.passwordPattern)]),
    ConfirmPassword: new FormControl("", [Validators.required]),
  });
}
dateValidator(control: any) {
  const inputDate = new Date(control.value);
    const currentDate = new Date();
    if (inputDate >= currentDate) {
      return { invalidDate: true };
    }
    return null;
}

submit(data: any) {
  if(this.myFormGroup.valid && data.password == data.ConfirmPassword){
    Users.push(data);
  }else
    Object.keys(this.myFormGroup.controls).forEach(key => this.myFormGroup.controls[key].markAsTouched());
}

}
