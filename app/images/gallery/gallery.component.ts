import { Component, OnInit,OnChanges} from '@angular/core';
import {ImageService} from '../image.service';
import { Router} from '@angular/router';
import {details} from '../Details';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
title: 'Recent Photos';
visibleImages: any;
  constructor(private http: HttpClient) {
	
	  this.http.get("assets/detail.json").subscribe(data => {
                   this.visibleImages = data;
                  });
  }
  
  getName(){
    
    }
     
     ngOnInit() { }
}
