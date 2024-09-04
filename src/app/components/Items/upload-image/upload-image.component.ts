import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.css'
})
export class UploadImageComponent {

  base64Image ="";
  @Input()
  displayPopup: boolean = true;
  @Output()
  messageEmitter = new EventEmitter();

uploadImage(event:any) {
  const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
      };
      reader.readAsDataURL(file);

    }
}
cancel(){
  this.messageEmitter.emit();
}
  submit(){
    this.messageEmitter.emit(this.base64Image);
  }
}
