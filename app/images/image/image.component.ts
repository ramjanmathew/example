import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { Router} from '@angular/router';
@Component({
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})


export class ImageComponent {
 
imaged = {};

  constructor(private _imageService: ImageService, private route: ActivatedRoute) { 
  	console.log(this.route.snapshot.params['id'])
    //this._imageService.getImage(this.route.snapshot.params['id']).subscribe(images => this.imaged ={imageUrl : images['_url']});


  }

  ngOnInit(){}
}
