import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {details} from './Details';

export interface details{
	albumId: number,
	Id: number,
	title: String,
	url: String,
	imageUrl: String
	
}

@Injectable()
export class ImageService{

    public _url: string = './detail.json';

    constructor(private _httpClient: HttpClient){}
    getImage(): Observable<details[]>{
        return this._httpClient.get<details[]>('../detail.json');
            }
            }
            