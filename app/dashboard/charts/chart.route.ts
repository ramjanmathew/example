import { Route } from '@angular/router';

import { ChartComponent } from './index';
import { GalleryComponent } from '../../images/gallery/gallery.component';

export const ChartRoutes: Route[] = [
  {
    path: 'chart',
    component: ChartComponent
  },
  {
  	path: 'images', 
  	component: GalleryComponent
  	}
];
