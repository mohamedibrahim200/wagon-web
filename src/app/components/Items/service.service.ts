import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

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
  filterCar() {
    window.open("SearchResultItem", '_self')
  }
  category: string = "wagon";
  changeCategory(cat: string ,){
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
  wagonty : string = "wagonType";
  wagonType(wagtype : string , ){
    this.wagonty = wagtype;
    if(wagtype=="micro")     {this.micro='activeBtnType' ; this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''} 
    else if (wagtype=="Sedan")  {this.micro='';this.Sedan='activeBtnType';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="Cuv")  {this.micro='';this.Sedan='';this.Cuv='activeBtnType';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="Suv")  {this.micro='';this.Sedan='';this.Cuv='';this.Suv='activeBtnType';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="Hatchback")  {this.micro='';this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='activeBtnType';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="Roadster")  {this.micro='';this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='activeBtnType';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="Pickup")  {this.micro='';this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='activeBtnType';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="coupe")  {this.micro='';this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='activeBtnType';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4=''}
    else if (wagtype=="micro1") {this.micro='' ; this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='activeBtnType' ; this.micro2='' ,this.micro3='';this.micro4='' }
    else if (wagtype=='micro2'){this.micro='' ; this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='activeBtnType' ,this.micro3='';this.micro4='' }
    else if (wagtype=='micro3'){this.micro='' ; this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='activeBtnType';this.micro4='' }
    else if (wagtype=='micro4'){this.micro='' ; this.Sedan='';this.Cuv='';this.Suv='';this.Hatchback='';this.Roadster='';this.Pickup='';this.coupe='';this.micro1='' ; this.micro2='' ,this.micro3='';this.micro4='activeBtnType' }
  }
  BrandTy: string = "BrandType";
  BrandType (BrandT : string){
    this.BrandTy = BrandT;
    if (BrandT == "BMW" ){this.BMW='activeBtnType' ; this.Nissan='';this.Toyota='';this.Honda='';this.Lancer='';this.Ford='';this.Mazda='';this.kia=''}
    else if (BrandT == "Nissan" ){this.BMW='';this.Nissan='activeBtnType' ; this.Toyota='';this.Honda='';this.Lancer='';this.Ford='';this.Mazda='';this.kia=''}
    else if (BrandT == "Toyota" ){this.BMW='';this.Nissan='';this.Toyota='activeBtnType' ; this.Honda='';this.Lancer='';this.Ford='';this.Mazda='';this.kia=''}
    else if (BrandT == "Honda" ){this.BMW='';this.Nissan='';this.Toyota='';this.Honda='activeBtnType' ; this.Lancer='';this.Ford='';this.Mazda='';this.kia=''}
    else if (BrandT == "Lancer" ){this.BMW='';this.Nissan='';this.Toyota='';this.Honda='';this.Lancer='activeBtnType' ; this.Ford='';this.Mazda='';this.kia=''}
    else if (BrandT == "Ford" ){this.BMW='';this.Nissan='';this.Toyota='';this.Honda='';this.Lancer='';this.Ford='activeBtnType' ; this.Mazda='';this.kia=''}
    else if (BrandT == "Mazda" ){this.BMW='';this.Nissan='';this.Toyota='';this.Honda='';this.Lancer='';this.Ford='';this.Mazda='activeBtnType' ; this.kia=''}
    else if (BrandT == "kia" ){this.BMW='';this.Nissan='';this.Toyota='';this.Honda='';this.Lancer='';this.Ford='';this.Mazda='';this.kia='activeBtnType' }
  }
  Carmodel: string = "CarModel";
  CarMod (CarMod : string){
    this.Carmodel = CarMod;
   
    if (CarMod == "X7" ){this.X7='activeBtnType' ; this.X6='';this.X3='';this.X1='';this.M3='';this.M4='';this.M5='';this.I8=''}
    else if (CarMod == "X6" ){this.X7='';this.X6='activeBtnType' ; this.X3='';this.X1='';this.M3='';this.M4='';this.M5='';this.I8=''}
    else if (CarMod == "X3"){this.X7='' ; this.X6='';this.X3='activeBtnType' ,this.X1='';this.M3='';this.M4='';this.M5='';this.I8=''}
    else if (CarMod == "X1"){this.X7='' ; this.X6='';this.X3='';this.X1='activeBtnType' ,this.M3='';this.M4='';this.M5='';this.I8=''}
    else if (CarMod == "M3"){this.X7='' ; this.X6='';this.X3='';this.X1='';this.M3='activeBtnType' ,this.M4='';this.M5='';this.I8=''}
    else if (CarMod == "M4"){this.X7='' ; this.X6='';this.X3='';this.X1='';this.M3='';this.M4='activeBtnType' ,this.M5='';this.I8=''}
    else if (CarMod == "M5"){this.X7='' ; this.X6='';this.X3='';this.X1='';this.M3='';this.M4='';this.M5='activeBtnType' ,this.I8=''}
    else if (CarMod == "I8"){this.X7='' ; this.X6='';this.X3='';this.X1='';this.M3='';this.M4='';this.M5='';this.I8='activeBtnType' }
  }
  Year: string = "Year";
  SelectYear ( SelectYears: string){
    this.Year = SelectYears;
  if (SelectYears == "1995") {this.Y1995="activeBtnType";this.Y1996="";this.Y1997="";this.Y1998="";this.Y1999="";this.Y2000="";this.Y2001="";this.Y2002="";} 
  else if (SelectYears == "1996"){this.Y1995="";this.Y1996="activeBtnType";this.Y1997="";this.Y1998="";this.Y1999="";this.Y2000="";this.Y2001="";this.Y2002="";}
  else if (SelectYears == "1997"){this.Y1995="";this.Y1996="";this.Y1997="activeBtnType";this.Y1998="";this.Y1999="";this.Y2000="";this.Y2001="";this.Y2002="";}
  else if (SelectYears == "1998"){this.Y1995="";this.Y1996="";this.Y1997="";this.Y1998="activeBtnType";this.Y1999="";this.Y2000="";this.Y2001="";this.Y2002="";}
  else if (SelectYears == "1999"){this.Y1995="";this.Y1996="";this.Y1997="";this.Y1998="";this.Y1999="activeBtnType";this.Y2000="";this.Y2001="";this.Y2002="";}
  else if (SelectYears == "2000"){this.Y1995="";this.Y1996="";this.Y1997="";this.Y1998="";this.Y1999="";this.Y2000="activeBtnType";this.Y2001="";this.Y2002="";}
  else if (SelectYears == "2001"){this.Y1995="";this.Y1996="";this.Y1997="";this.Y1998="";this.Y1999="";this.Y2000="";this.Y2001="activeBtnType";this.Y2002="";}
  else if (SelectYears == "2002"){this.Y1995="";this.Y1996="";this.Y1997="";this.Y1998="";this.Y1999="";this.Y2000="";this.Y2001="";this.Y2002="activeBtnType";}
  }
  Trans : string = "Transmissions";
  Transmission ( Transmissions: string){
    this.Trans = Transmissions;
    if (Transmissions == "Manual" ){this.Manual="activeBtnType";this.Automatic="";this.CVT=""} 
    if (Transmissions == "Automatic"){this.Manual="";this.Automatic="activeBtnType";this.CVT="";}
    if (Transmissions == "CVT"){this.Manual="";this.Automatic="";this.CVT="activeBtnType";}
  }

}
