import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
filterCar() {
throw new Error('Method not implemented.');
}
  wagon:String="";
Brand:String="";
model:String="";
year:String="";
Mileage:String="";
City:String="";
Transmissions:String="";
Price:String="";
// wagon_Type

micro:String="";
Sedan:String="";
Cuv:string="";
Suv:string="";
Hatchback:string=""; 
Roadster:string="";
Pickup:string="";
coupe:string="";
micro1:string="";
micro2:string="";
micro3:string="";
micro4:string="";

// Brand_Type
BMW : string = "";
Nissan: string = "";
Toyota: string = "";
Honda: string = "";
Lancer: string = "";
Ford: string = "";
Mazda: string = "";
kia: string = "";
//Car_model
X7 : string = "";
X6 : string = "";
X3 : string = "";
X1 : string = "";
M3 : string = "";
M4: string = "";
M5 : string = "";
I8 : string = "";
//Select Year
Y1995 : string = "";
Y1996 : string = "";
Y1997 : string = "";
Y1998 : string = "";
Y1999 : string = "";
Y2000 : string = "";
Y2001 : string = "";
Y2002 : string = "";
//Transmissions
Manual : string = "";
Automatic : string = "";
CVT : string = "";
enteryear = "";
parentdata = '';
changeCategory(arg0: string) {
throw new Error('Method not implemented.');
}

}
