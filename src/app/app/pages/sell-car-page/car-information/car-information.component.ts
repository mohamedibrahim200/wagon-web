import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { cities, carBrands, environment } from '../../../../../environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-car-information',
  templateUrl: './car-information.component.html',
  styleUrl: './car-information.component.css',
})
export class CarInformationComponent implements OnInit{


  transmissionTypes: string [] = ['CVT Automatic', 'Manual Transmission', 'Clutch', 'automatic transmission', 'Torque Converter', 'Tiptronic Transmission', 'Automated', 'sequential transmission', 'Direct Shift Gearbox'];
  colors: string [] = ['White', 'Black', 'Gray', 'Silver', 'Blue', 'Red', 'Green', 'Brown', 'Orange', 'Beige', 'Purple', 'Yellow'];
  displayPopup: boolean = false;
  carPhotos: any;
  uploadFunc: string = '';
  formData: carInfo = new carInfo();
  countries: { name: string; id: number }[] = [];
  citiesOnly: string[] = [];
  carBrands: { brand: string; models: string[] }[] = carBrands;
  carModels: string[] = [];
  carBodyTypes: { ID: number; Name: string }[] = [
    { ID: 5, Name: 'Coupe' },
    { ID: 7, Name: 'Hatchback' },
    { ID: 10, Name: 'RV-SUV' },
    { ID: 11, Name: 'Sedan' },
    { ID: 12, Name: 'Station Wagon' },
    { ID: 16, Name: 'SUV' },
    { ID: 13, Name: 'Ute' },
    { ID: 14, Name: 'Van' },
  ];
  modelYears: number[] = [];
  @Output()
  messageEmitter = new EventEmitter();
  myFormGroup: any;
  constructor() { }
  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      brand: new FormControl("", [Validators.required]),
      milage: new FormControl(null, [Validators.required, Validators.min(0)]),
      model: new FormControl("", [Validators.required]),
      year: new FormControl(null, [Validators.required, Validators.min(new Date().getFullYear() - environment.yearModels)]),
      engineCapacity: new FormControl(null, [Validators.min(800)]),
      bodyType: new FormControl("", [Validators.required]),
      color: new FormControl("", [Validators.required]),
      interialMatrial: new FormControl(""),
      price: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl(null, [Validators.required]),
      transmission: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required])
    });
    Object.keys(cities).forEach((key, index) => {
      this.countries.push({ name: key, id: index });
    });
    for (let i = 0; i <= environment.yearModels; i++)
      this.modelYears.push(new Date().getFullYear() - i);

    this.changeCountry({name:'Egypt', id:0});
  }
  updateCarColor(color: string) {
    this.formData.color = color;
    this.myFormGroup.controls["color"].setValue(color);
    this.myFormGroup.controls["color"].updateValueAndValidity();
  }
  updateTransmisionType(transmision: string) {
    this.formData.transmision = transmision;
    this.myFormGroup.controls["transmission"].setValue(transmision);
    this.myFormGroup.controls["transmission"].updateValueAndValidity();
  }
  updateCarYearModel(year: number) {
    this.formData.year= year;
    this.myFormGroup.controls["year"].setValue(year);
    this.myFormGroup.controls["year"].updateValueAndValidity();
  }
  brandChange(brand: any) {
    this.carModels = brand.models;
    this.formData.brand = brand.brand;
    this.formData.model = "";
    this.myFormGroup.controls["brand"].setValue(brand.brand);
    this.myFormGroup.controls["brand"].updateValueAndValidity();
  }
  updateBodyType(name: string) {
    this.formData.bodyType = name;
    this.myFormGroup.controls["bodyType"].setValue(name);
    this.myFormGroup.controls["bodyType"].updateValueAndValidity();
  }
  changeCountry(country?: any) {
    if (country) {
      this.formData.country = country.name;
      this.myFormGroup.controls["country"].setValue(country.name);
      this.myFormGroup.controls["country"].updateValueAndValidity();
      this.citiesOnly = cities[country.name as keyof typeof cities];
    } else {
      this.countries = [];
    }
  }
  uploadPhoto(photoType: string) {
    this.displayPopup = true;
    this.uploadFunc = photoType;
  }
  updateCity(city: string) {
    this.formData.city = city;
    this.myFormGroup.controls["city"].setValue(city);
    this.myFormGroup.controls["city"].updateValueAndValidity();
  }
  updateCarModel(model: string) {
    this.formData.model= model;
    this.myFormGroup.controls["model"].setValue(model);
    this.myFormGroup.controls["model"].updateValueAndValidity();
  }

  pushImage(img?: string) {
    if (img && img.trim() != '') {
      if (this.uploadFunc == 'Main') this.formData.mainImage = img;
      else {
        this.formData.carImages.push(img);
      }
    }
    this.displayPopup = false;
  }

  nextStep(){
    if(this.myFormGroup.valid && !this.isEmpty(this.formData.mainImage) && this.formData.carImages.length >= 3){
      let formValue = this.myFormGroup.value;
      formValue.mainImage = this.formData.mainImage,
      formValue.carImages = this.formData.carImages;
      formValue.NextStep = 2;
      this.messageEmitter.emit(formValue);
    }else{
      Object.keys(this.myFormGroup.controls).forEach(key => this.myFormGroup.controls[key].markAsTouched());
    }
  }
  isEmpty(val: any) {
    return val == (undefined || null) || val.length == 0 || val == 0 ;
  }
}

class carInfo {
  brand = '';
  model = '';
  bodyType = '';
  Milage: number = 0;
  year: number = 0;
  transmision = '';
  carPrice: number = 0;
  city = '';
  country = '';
  mainImage = '';
  carImages: string[] = [];
  name = '';
  phoneNumber = '';
  email = '';
  NextStep = 2;
  color = '';
  engineCapacity = 0;
}
