import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transmissions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transmissions.component.html',
  styleUrl: './transmissions.component.css'
})
export class TransmissionsComponent implements OnInit {
  filter:string[][]=[
    ["Brand","Brand_Type","BMW","Nissan","Toyota","Honda","Lancer","Ford","Mazda","kia","X7","X6","X3","X1","M3","M4","M5","I8"],
    ["Transmissions","Manual","Automatic","CVT"]
  ];
  ngOnInit(): void {
    sessionStorage.setItem('filter',JSON.stringify(this.filter));
  }
  Transmissions:String="";
  category: string = "wagon";
  Trans : string = "Transmissions";
  Manual : string ="";
  Automatic : string ="";
  CVT : string ="";

  changeCategory(cat: string ,){
    this.category = cat;
   if(cat=='Transmissions')  {this.Transmissions='activeBtnType'}  
  }
Transmission ( Transmissions: string){
  this.Trans = Transmissions;
  if (Transmissions == "Manual" || Transmissions ==  ' '){this.Manual="activeBtnType";this.Automatic="";this.CVT=""} 
  else if (Transmissions == "Automatic"){this.Manual="";this.Automatic="activeBtnType";this.CVT="";}
  else if (Transmissions == "CVT"){this.Manual="";this.Automatic="";this.CVT="activeBtnType";}
}


}
