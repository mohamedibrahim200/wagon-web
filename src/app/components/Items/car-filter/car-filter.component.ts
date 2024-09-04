import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FilterComponent } from "./filter/filter.component";
import { TransmissionsComponent } from "./Transmissions/transmissions/transmissions.component";
import { CarFilterService } from '../../../CarFilterService';

@Component({
    selector: 'app-car-filter',
    standalone: true,
    templateUrl: './car-filter.component.html',
    styleUrl: './car-filter.component.css',
    imports: [CommonModule, FilterComponent, TransmissionsComponent , NgFor]
})
export class CarFilterComponent implements OnInit {
  constructor(private carFilterService: CarFilterService  ) {}

  ngOnInit(): void {
  

  }
  searchObject = {
    Type: "",Brand:"",Model:"",Year:"",Mileage:"",City:"",Transmissions:"",Price:""
    
  };


  filterCar() {
  window.open("SearchResultItem", '_self')
}
wagon:String="";
Brand:String="";
model:String="";
year:String="";
Mileage:String="";
City:String="";
Transmissions:String="";
Price:String="";
category: string = "wagon";
changeCategory(cat: string){
  this.category = cat;
  if(cat=='wagon')      {this.wagon='activeBtnType';this.Brand='';this.model='';this.year='';this.Mileage='';this.City='';this.Transmissions='';this.Price=''}
  else if(cat=='Brand')  {this.wagon='';this.Brand='activeBtnType';this.model='';this.year='';this.Mileage='';this.City='';this.Transmissions='';this.Price=''}
  else if(cat=='model')  {this.wagon='';this.Brand='';this.model='activeBtnType';this.year='';this.Mileage='';this.City='';this.Transmissions='';this.Price=''}
  else if(cat=='year')   {this.wagon='';this.Brand='';this.model='';this.year='activeBtnType';this.Mileage='';this.City='';this.Transmissions='';this.Price=''}
  else if(cat=='Mileage'){this.wagon='';this.Brand='';this.model='';this.year='';this.Mileage='activeBtnType';this.City='';this.Transmissions='';this.Price=''}
  else if(cat=='City')   {this.wagon='';this.Brand='';this.model='';this.year='';this.Mileage='';this.City='activeBtnType';this.Transmissions='';this.Price=''}
  else if(cat=='Transmissions')  {this.wagon='';this.Brand='';this.model='';this.year='';this.Mileage='';this.City='';this.Transmissions='activeBtnType';this.Price=''}
  else if(cat=='Price')  {this.wagon='';this.Brand='';this.model='';this.year='';this.Mileage='';this.City='';this.Transmissions='';this.Price='activeBtnType'}
}

categoryType : string []=[];
categoryStates : {[key : string] : string } = {
  wagon:'' , Brand : '' , model :'' , year:'' , Mileage:'' , City :'' , Transmissions:'' , Price :''
}
wagonType : string []=['micro', 'Sedan', 'Cuv', 'Suv', 'Hatchback', 'Roadster', 'Pickup', 'coupe'];
wagonStates :{[key : string] : string} = {}
@Output() carTypeSelected = new EventEmitter<string[]>();
Wagon(wagon: string) {
  this.wagonType.forEach((type) => {
    if (type === wagon) {
      if (this.wagonStates[type] === 'activeBtnType') {
        this.wagonStates[type] = '';
        this.searchObject.Type = this.searchObject.Type.replaceAll(`${type} ,`, '');
      } else {
        this.wagonStates[type] = 'activeBtnType';
        this.searchObject.Type += `${type} ,`;
      }
    }
  });
  this.updateSelectedTypes();
  console.log(this.searchObject.Type);
}
updateSelectedTypes() {
  const selectedTypes = this.wagonType.filter(type => this.wagonStates[type] === 'activeBtnType');
  this.carFilterService.updateSelectedCarTypes(selectedTypes);
}

brandType : string []= ['BMW', 'Nissan', 'Toyota', 'Honda', 'Lancer', 'Ford', 'Mazda', 'kia'];
brandStates : {[key : string] : string} = {}
selectedBrand : string ='';
Brands(brand :string){
this.brandType.forEach(type => {
  if(type == brand){
    if(this.brandStates[type]=="activeBtnType"){
     this. brandStates[type]=""
     this.searchObject.Brand=this.searchObject.Brand.replaceAll(`${type} ,` , '')
    }else{ this. brandStates[type]="activeBtnType";
        this.searchObject.Brand+=`${type} ,`
    }
    this.selectedBrand=this.searchObject.Brand
  }
});
console.log(this.searchObject.Brand)
}
selectedModel: string = '';
modelType : string []= ['X7', 'X6', 'X3', 'X1', 'M3', 'M4', 'M5', 'I8']
modelStates : {[key : string] : string} = {
  X7 : "" , X6 :"" , X3 :"", X1 :"" , M3:"" , M4 : "" , M5:"" , I8 :""
}

Models(car : string){
  this.modelType.forEach(type => {
     if(type == car){
       if(this.modelStates[type] == 'activeBtnType' ){
         this.modelStates[type] ="";
         this.searchObject.Model= this.searchObject.Model.replaceAll(`${type} ,` , '')
       }else{
           this.modelStates[type] ="activeBtnType";
           this.searchObject.Model+=`${type} ,`
       }
       this.selectedModel = this.searchObject.Model;
    console.log(this.searchObject.Model);
     }
   });
   console.log(this.searchObject.Model)
 }
selectedYear : string = ''
yearType  : string []=['1995' ,'1996' , '1997' , '1998' , '1999' , '2000' , '2001' , '2002' ];
yearStates :{[Key : string] : string} = {
  1995 : "" , 1996 : "" , 1997 :"" , 1998 :"", 1999 :"" , 2000 :"" , 2001 :"" , 2002 :""
}
    Year (Year : string){
      this.yearType.forEach(type =>{
        if (type == Year){
         if(this.yearStates[type] == 'activeBtnType'){
          this.yearStates[type]="";
          this.searchObject.Year=this.searchObject.Year.replaceAll(`${type} ,` , '')
         }else{
            this.yearStates[type]="activeBtnType";
            this.searchObject.Year+= `${type} ,`
         }
        }
        this.selectedYear=this.searchObject.Year
        console.log(this.searchObject.Year);
      })
        console.log(this.searchObject.Year)
      
    }

mileageType : number [] = [ 100,2000 ]
mileageStates : {[Key : number] : number} ={
  
}

cityType : string []=[]
cityStates : {[Key : string] : string} ={}


transmissionTypes: string[] = ['Manual', 'Automatic', 'CVT'];
transmissionStates: { [key: string]: string } = {
  Manual: "", Automatic: "", CVT: ""
};
Transmission(Transmissions: string) {
  this.transmissionTypes.forEach(type => {
    if (type == Transmissions) {
      if (this.transmissionStates[type] == "activeBtnType") {
        this.transmissionStates[type] = "";
        this.searchObject.Transmissions = this.searchObject.Transmissions.replaceAll(`${type} ,`, '');
      } else {
        this.transmissionStates[type] = "activeBtnType";
        this.searchObject.Transmissions += `${type} ,`;
      }
    }
  });
  console.log(this.searchObject.Transmissions );
}

priceType : number [] = [ 100,2000 ]
priceStates : {[key : string] : number} = {
  // priceFrom : ,  priceTo :
}

}
  
