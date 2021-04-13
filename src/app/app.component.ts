import { Component } from '@angular/core';

import { ImageCroppedEvent } from 'ngx-image-cropper';

declare const SimpleImage: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edit-img';
  name = 'Angular';
  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = new SimpleImage(event.base64);
    console.log(this.croppedImage)
    console.log(this.croppedImage.values())

    for (let pixel of this.croppedImage.values()) {
      let avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
    let canvas = document.getElementById("can");

    this.croppedImage.drawTo(canvas);


  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
