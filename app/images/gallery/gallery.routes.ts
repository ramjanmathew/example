import { Route } from '@angular/router';
import { GalleryComponent } from './images/gallery/gallery.component';

export const ImageRoutes: Route[] = [
    {
      path: 'images',
      component: GalleryComponent
    }
];
