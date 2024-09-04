import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-news-paper-page',
  templateUrl: './select-news-paper-page.component.html',
  styleUrl: './select-news-paper-page.component.css'
})
export class SelectNewsPaperPageComponent {
selectPageStyle(styleNo: string) {
  this.pageTemplate =  styleNo;
  switch(styleNo){
    case '1':
      this.pageStyleImg = "./assets/Site_Images/pageOne.svg";
      break;
    case '2':
      this.pageStyleImg = "./assets/Site_Images/pageTwo.svg";
      break;  
    case '3':
      this.pageStyleImg = "./assets/Site_Images/pageThree.svg";
      break;
    case '4':
      this.pageStyleImg = "./assets/Site_Images/pageSex.svg";
      break;
    }
}

  @Input()
  sellCar:any;
  @Output()
  messageEmitter = new EventEmitter();
  pageTemplates: string = "1";
  pageTemplate: string = "";
  pageStyleImg: string = "./assets/Site_Images/pageSex.svg";

  submit(){
    this.sellCar.NextStep = 2.1;
    this.messageEmitter.emit(this.sellCar);
  }
}
