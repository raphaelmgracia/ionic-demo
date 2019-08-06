import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UserPageComponent } from './containers/user-page/user-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UsersPageComponent
      },
      {
        path: ':id',
        component: UserPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
