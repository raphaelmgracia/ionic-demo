import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogIndexPageComponent } from './containers/blog-index-page/blog-index-page.component';
import { BlogItemPageComponent } from './containers/blog-item-page/blog-item-page.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogIndexPageComponent,
    BlogItemPageComponent
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
