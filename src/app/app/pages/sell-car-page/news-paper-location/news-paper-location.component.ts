import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UploadImageComponent } from "../../../../components/Items/upload-image/upload-image.component";

@Component({
    selector: 'app-news-paper-location',
    templateUrl: './news-paper-location.component.html',
    styleUrl: './news-paper-location.component.css',
})
export class NewsPaperLocationComponent {
  displayPopup: boolean = false ;
  adsImages: string[] =[];
  newsPaperAds: any [] = [];
  pageNumber: any;
  adDetails: AdDetails;
  imageOf: string = "";
  indexOfImage: number = -1;
  @Input()
  sellCar: any;
  @Output()
  messageEmitter = new EventEmitter();

  constructor(){
    this.adDetails = new AdDetails();
  }
  chooseAdLocation(loc: any){
    this.adDetails = new AdDetails();
    this.adDetails.AdPageNumber = this.pageNumber = loc.pageNumber;
    this.adDetails.AdRowNo = loc.rowNo;
    this.adDetails.AdCellNo = loc.cellNo;
  }
  displayPopUp(imageOf:string, indexOfImage?: number){
    this.displayPopup = true;
    this.imageOf = imageOf;
    this.indexOfImage = indexOfImage ?? -1;
  }
  
  pushImage(img: string) {
    if(img != (null || undefined || "")){
      if(this.imageOf == "main")
        this.adDetails.AdMainImage = img;
      else{
        this.adDetails.AdImages[this.indexOfImage] = img;
      }
    }
    this.displayPopup = false;
  }
  continue(){
    this.sellCar.NextStep = 3;
    Object.keys(this.adDetails).forEach(key => {
      this.sellCar[key] = this.adDetails[key as keyof typeof this.adDetails];
    })
    this.messageEmitter.emit(this.sellCar);
  }
}
class AdDetails{
  AdPageNumber = "";
  AdRowNo = "";
  AdCellNo = "";
  AdMainImage = "";
  AdImages: string[] = new Array(3);
  description = "";
}