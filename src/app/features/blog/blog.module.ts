import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogIndexPageComponent } from './containers/blog-index-page/blog-index-page.component';
import { BlogItemPageComponent } from './containers/blog-item-page/blog-item-page.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogEditPageComponent } from './containers/blog-edit-page/blog-edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlogIndexPageComponent,
    BlogItemPageComponent,
    BlogEditPageComponent
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
