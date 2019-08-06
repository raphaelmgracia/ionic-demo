import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersPageComponent } from './containers/users-page/users-page.component';
import { UserPageComponent } from './containers/user-page/user-page.component';


@NgModule({
  declarations: [
    UsersPageComponent,
    UserPageComponent,
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
