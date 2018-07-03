import { Route } from '@angular/router';
import { GalleryComponent } from './index';
import {ImageComponent} from '../image/image.component';

export const GalleryRoutes: Route[] = [
    {
      path: 'images',
      component: GalleryComponent
    },
    {
    path : 'grp',
    component: ImageComponent
    }
];
