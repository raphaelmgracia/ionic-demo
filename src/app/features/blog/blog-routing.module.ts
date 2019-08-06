import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogIndexPageComponent } from './containers/blog-index-page/blog-index-page.component';
import { BlogItemPageComponent } from './containers/blog-item-page/blog-item-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogIndexPageComponent
      },
      {
        path: ':id',
        component: BlogItemPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
