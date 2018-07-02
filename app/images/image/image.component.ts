import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
 

  constructor(private _imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    

   /* this.image = this._imageService.getImage(
      +this.route.snapshot.params['id'])
      .subscribe(images => this.image ={imageUrl : images['_url']
  });*/
}
}
